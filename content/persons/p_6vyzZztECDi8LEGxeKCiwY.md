---
schema: wang-person/v1
id: p_6vyzZztECDi8LEGxeKCiwY
status: active
merged_into: null
display_name: 王輯遠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ja8chL3NAJWjo8tENGWmgz
        subject_person_id: p_6vyzZztECDi8LEGxeKCiwY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輯遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2vk4vj2pw3ERggvjb3XCjU
          claim_id: c_ja8chL3NAJWjo8tENGWmgz
          source_id: s_HyaS2jPjrMvL5u6ArdFbJT
          stance: supports
          locator: CBDB:557767
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557767）
          source: &a1
            id: s_HyaS2jPjrMvL5u6ArdFbJT
            source_type: api_record
            title: 中国历代人物传记资料库：王輯遠（CBDB 557767）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557767&o=json
            external_identifier: CBDB:557767
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.542Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KfjLoJaEATq7jkEKR2VDh2
        subject_person_id: p_6vyzZztECDi8LEGxeKCiwY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輯遠，清人物。籍贯鄧州，入仕貢生 = 貢監生 (明清賓貢,功貢)。（中国历代人物传记资料库 CBDB 557767）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R5kPrhcA4-onnvBCG8FB5y
          claim_id: c_KfjLoJaEATq7jkEKR2VDh2
          source_id: s_HyaS2jPjrMvL5u6ArdFbJT
          stance: supports
          locator: CBDB:557767
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
        id: c_xf27lMTDT0cweSyPFQFUr1
        subject_person_id: p_6vyzZztECDi8LEGxeKCiwY
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_juT2gDxwoW521eL6PyegmC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4QKf0jWkmDVvNYO3QuGfnw
          claim_id: c_xf27lMTDT0cweSyPFQFUr1
          source_id: s_pZjnkVfcPhxZbbdVCfB9cw
          stance: supports
          locator: 南陽府志，lgid=878791：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pZjnkVfcPhxZbbdVCfB9cw
            source_type: api_record
            title: 中国历代人物传记资料库：彭氏(王輯遠妻)（CBDB 557768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557768&o=json
            external_identifier: CBDB:557768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_juT2gDxwoW521eL6PyegmC
        status: active
        display_name: 彭氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王輯遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輯遠 | accepted |
| bio.summary | 王輯遠，清人物。籍贯鄧州，入仕貢生 = 貢監生 (明清賓貢,功貢)。（中国历代人物传记资料库 CBDB 557767） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_juT2gDxwoW521eL6PyegmC | 彭氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：彭氏(王輯遠妻)（CBDB 557768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557768&o=json)
- [中国历代人物传记资料库：王輯遠（CBDB 557767）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557767&o=json)
