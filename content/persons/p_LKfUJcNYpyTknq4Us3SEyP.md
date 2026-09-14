---
schema: wang-person/v1
id: p_LKfUJcNYpyTknq4Us3SEyP
status: active
merged_into: null
display_name: 王樂
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kbNQApGiHZBFGm3Bkwh6Tb
        subject_person_id: p_LKfUJcNYpyTknq4Us3SEyP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eMUVJq9DprEj4ZAqY1Vx7k
          claim_id: c_kbNQApGiHZBFGm3Bkwh6Tb
          source_id: s_ykDHHwgYQUK24H4SBPaW85
          stance: supports
          locator: CBDB:279556
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279556）
          source: &a1
            id: s_ykDHHwgYQUK24H4SBPaW85
            source_type: api_record
            title: 中国历代人物传记资料库：王樂（CBDB 279556）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279556&o=json
            external_identifier: CBDB:279556
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.991Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uMFWmmwgL2QgnnpBc2Kdqj
        subject_person_id: p_LKfUJcNYpyTknq4Us3SEyP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樂，明人物。正德十二年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 279556）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QimPBhjqs_p3Uj7j-sXiSV
          claim_id: c_uMFWmmwgL2QgnnpBc2Kdqj
          source_id: s_ykDHHwgYQUK24H4SBPaW85
          stance: supports
          locator: CBDB:279556
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OrnQiXTvO-Xey_1zgaQvBi
        subject_person_id: p_QN7EhCDtejfmZYbCTCBWyv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LKfUJcNYpyTknq4Us3SEyP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hPLfa0d2o3iIDDWi4F-UHM
          claim_id: c_OrnQiXTvO-Xey_1zgaQvBi
          source_id: s_X8k6t2eIzsOTdCcNEoBtdF
          stance: supports
          locator: CBDB：兄弟 王臬（34721）之父／母 王瀚
          quotation: null
          interpretation_note: 由兄弟关系推断：王樂 与 王臬 为同胞（CBDB 记「兄」），王臬 之父／母即 王樂 之父／母。
          source:
            id: s_X8k6t2eIzsOTdCcNEoBtdF
            source_type: api_record
            title: 中国历代人物传记资料库：王樂（CBDB 279556）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279556&o=json
            external_identifier: CBDB:279556
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QN7EhCDtejfmZYbCTCBWyv
        status: active
        display_name: 王瀚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_uRItbXSk88SJTOYX3_YGmc
        subject_person_id: p_LKfUJcNYpyTknq4Us3SEyP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cHUZb98V81PpJVuKJugGHw
          claim_id: c_uRItbXSk88SJTOYX3_YGmc
          source_id: s_X8k6t2eIzsOTdCcNEoBtdF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34721 王臬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_X8k6t2eIzsOTdCcNEoBtdF
            source_type: api_record
            title: 中国历代人物传记资料库：王樂（CBDB 279556）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279556&o=json
            external_identifier: CBDB:279556
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vpzDXBrQjqPJnEN64LCsPF
        status: active
        display_name: 王臬
        merged_into_person_id: null
---

# 王樂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樂 | accepted |
| bio.summary | 王樂，明人物。正德十二年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 279556） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QN7EhCDtejfmZYbCTCBWyv | 王瀚 | accepted |
| other | p_vpzDXBrQjqPJnEN64LCsPF | 王臬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王樂（CBDB 279556）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279556&o=json)
