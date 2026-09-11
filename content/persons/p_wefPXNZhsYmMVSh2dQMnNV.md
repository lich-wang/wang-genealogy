---
schema: wang-person/v1
id: p_wefPXNZhsYmMVSh2dQMnNV
status: active
merged_into: null
display_name: 王興式
cbdb_id: 518983
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eY3ar7yZM59EeRL4zB3A4z
        subject_person_id: p_wefPXNZhsYmMVSh2dQMnNV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興式，清人物。中国历代人物传记资料库（CBDB）以人物编号 518983 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs__mIojwdvM-grGK1wM4nmvB
          claim_id: c_eY3ar7yZM59EeRL4zB3A4z
          source_id: s_hGREWsep2gQLjmbfzFiK8K
          stance: supports
          locator: CBDB:518983
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_hGREWsep2gQLjmbfzFiK8K
            source_type: api_record
            title: 中国历代人物传记资料库：王興式（CBDB 518983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=518983&o=json
            external_identifier: CBDB:518983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GYNvHuBux7vRy674K7bT8i
        subject_person_id: p_wefPXNZhsYmMVSh2dQMnNV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興式
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_F145KP2rrhwGeJUfohkfSf
          claim_id: c_GYNvHuBux7vRy674K7bT8i
          source_id: s_hGREWsep2gQLjmbfzFiK8K
          stance: supports
          locator: CBDB:518983
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_hGREWsep2gQLjmbfzFiK8K
            source_type: api_record
            title: 中国历代人物传记资料库：王興式（CBDB 518983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=518983&o=json
            external_identifier: CBDB:518983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FbHy1qKKFBXMqsEVLigYoA
        subject_person_id: p_DUnAJiYeksnp3F3vurBhYT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wefPXNZhsYmMVSh2dQMnNV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QSbyldKGGns9bECYliuWiC
          claim_id: c_FbHy1qKKFBXMqsEVLigYoA
          source_id: s_amZ1sbs7EK5KSrXoj2u4zq
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），3305：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_amZ1sbs7EK5KSrXoj2u4zq
            source_type: api_record
            title: 中国历代人物传记资料库：王永譽（CBDB 59996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59996&o=json
            external_identifier: CBDB:59996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_DUnAJiYeksnp3F3vurBhYT
        status: active
        display_name: 王永譽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王興式

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王興式，清人物。中国历代人物传记资料库（CBDB）以人物编号 518983 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王興式 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DUnAJiYeksnp3F3vurBhYT | 王永譽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王興式（CBDB 518983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=518983&o=json)
- [中国历代人物传记资料库：王永譽（CBDB 59996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59996&o=json)
