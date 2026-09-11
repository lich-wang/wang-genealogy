---
schema: wang-person/v1
id: p_kvkuDUVw4cdQYN9MmsCViL
status: active
merged_into: null
display_name: 王一鶚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iiyBSquFCDcy7wxRBBbppQ
        subject_person_id: p_kvkuDUVw4cdQYN9MmsCViL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一鶚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CpJZKy26zBVMn87BjnTVTi
          claim_id: c_iiyBSquFCDcy7wxRBBbppQ
          source_id: s_grvK7duUCu1nht2MdHmR6N
          stance: supports
          locator: CBDB:126439
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126439）
          source: &a1
            id: s_grvK7duUCu1nht2MdHmR6N
            source_type: api_record
            title: 中国历代人物传记资料库：王一鶚（CBDB 126439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126439&o=json
            external_identifier: CBDB:126439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g5TP5XPsKBBnMQepvbtF6E
        subject_person_id: p_kvkuDUVw4cdQYN9MmsCViL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一鶚，明人物。明清進士進士，籍贯曲周，入仕進士。（中国历代人物传记资料库 CBDB 126439）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pk5kSvmD_EGcrlmwYyB0LP
          claim_id: c_g5TP5XPsKBBnMQepvbtF6E
          source_id: s_grvK7duUCu1nht2MdHmR6N
          stance: supports
          locator: CBDB:126439
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_wWvI9AU_XVRm_dui2ebBAN
        subject_person_id: p_kvkuDUVw4cdQYN9MmsCViL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xPRxJoa3ZFsJj5h1A277oW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FMT1yGHJqPH-bOnjSqzkGx
          claim_id: c_wWvI9AU_XVRm_dui2ebBAN
          source_id: s_fKlNz3Jb64Z-kn3-8NIgQ-
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第二甲第八十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fKlNz3Jb64Z-kn3-8NIgQ-
            source_type: api_record
            title: 中国历代人物传记资料库：黃氏(楊一鶚妻)（CBDB 315776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315776&o=json
            external_identifier: CBDB:315776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xPRxJoa3ZFsJj5h1A277oW
        status: active
        display_name: 黃氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王一鶚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一鶚 | accepted |
| bio.summary | 王一鶚，明人物。明清進士進士，籍贯曲周，入仕進士。（中国历代人物传记资料库 CBDB 126439） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_xPRxJoa3ZFsJj5h1A277oW | 黃氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：黃氏(楊一鶚妻)（CBDB 315776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315776&o=json)
- [中国历代人物传记资料库：王一鶚（CBDB 126439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126439&o=json)
