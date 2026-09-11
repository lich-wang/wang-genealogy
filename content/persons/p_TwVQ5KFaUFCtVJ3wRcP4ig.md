---
schema: wang-person/v1
id: p_TwVQ5KFaUFCtVJ3wRcP4ig
status: active
merged_into: null
display_name: 王文昭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jJDyykEkxb5hCVNnJMG4jj
        subject_person_id: p_TwVQ5KFaUFCtVJ3wRcP4ig
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文昭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3Drj5EyEEqueAHi5TTEUtY
          claim_id: c_jJDyykEkxb5hCVNnJMG4jj
          source_id: s_pGQPU7WzvFTMfMvkE7zT38
          stance: supports
          locator: CBDB:276556
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276556）
          source: &a1
            id: s_pGQPU7WzvFTMfMvkE7zT38
            source_type: api_record
            title: 中国历代人物传记资料库：王文昭（CBDB 276556）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276556&o=json
            external_identifier: CBDB:276556
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.942Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MWrNpn5w76qMwDMrmFtU23
        subject_person_id: p_TwVQ5KFaUFCtVJ3wRcP4ig
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文昭，明人物。正德六年進士。（中国历代人物传记资料库 CBDB 276556）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Vw3EU2291q1WyS9lJPVsFP
          claim_id: c_MWrNpn5w76qMwDMrmFtU23
          source_id: s_pGQPU7WzvFTMfMvkE7zT38
          stance: supports
          locator: CBDB:276556
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
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c__ADFgJYEZ4bHi3pfB3zslN
        subject_person_id: p_TwVQ5KFaUFCtVJ3wRcP4ig
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_f8i9p9JzFPTMv3CWRTDLAz
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oE8P4n_P29in8_VFjVQLy5
          claim_id: c__ADFgJYEZ4bHi3pfB3zslN
          source_id: s_jzgtJjtpFDj5d79TQgELye
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第七十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jzgtJjtpFDj5d79TQgELye
            source_type: api_record
            title: 中国历代人物传记资料库：王鑾（CBDB 126900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126900&o=json
            external_identifier: CBDB:126900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.294Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_f8i9p9JzFPTMv3CWRTDLAz
        status: active
        display_name: 王鑾
        merged_into_person_id: null
  other: []
---

# 王文昭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文昭 | accepted |
| bio.summary | 王文昭，明人物。正德六年進士。（中国历代人物传记资料库 CBDB 276556） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_f8i9p9JzFPTMv3CWRTDLAz | 王鑾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑾（CBDB 126900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126900&o=json)
- [中国历代人物传记资料库：王文昭（CBDB 276556）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276556&o=json)
