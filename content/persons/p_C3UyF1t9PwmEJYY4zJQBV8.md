---
schema: wang-person/v1
id: p_C3UyF1t9PwmEJYY4zJQBV8
status: active
merged_into: null
display_name: 王炫
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HB2DiEKgpZebcnJoQVWAKr
        subject_person_id: p_C3UyF1t9PwmEJYY4zJQBV8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_REvdoTZm7sKYq86M8mJ6ya
          claim_id: c_HB2DiEKgpZebcnJoQVWAKr
          source_id: s_vsPQhuFPZN5zYGJjKkNhX6
          stance: supports
          locator: CBDB:272149
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（272149）
          source: &a1
            id: s_vsPQhuFPZN5zYGJjKkNhX6
            source_type: api_record
            title: 中国历代人物传记资料库：王炫（CBDB 272149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272149&o=json
            external_identifier: CBDB:272149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.885Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PtairUh4d4bgNJ1PQFG5dp
        subject_person_id: p_C3UyF1t9PwmEJYY4zJQBV8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炫，明人物。弘治十五年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 272149）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Lv9Y8_NYTnKZam70YzMzWM
          claim_id: c_PtairUh4d4bgNJ1PQFG5dp
          source_id: s_vsPQhuFPZN5zYGJjKkNhX6
          stance: supports
          locator: CBDB:272149
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_36jFLGw2pdbLnDYQb_EWDt
        subject_person_id: p_Zc7mv2e4ZRM13rfjpkZkya
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_C3UyF1t9PwmEJYY4zJQBV8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kv39NRa4pyncJyBwuhLb4Z
          claim_id: c_36jFLGw2pdbLnDYQb_EWDt
          source_id: s_WKZA2u0n1ON6z96B_28XHz
          stance: supports
          locator: CBDB：兄弟 王爌（68280）之父／母 王玼
          quotation: null
          interpretation_note: 由兄弟关系推断：王炫 与 王爌 为同胞（CBDB 记「兄」），王爌 之父／母即 王炫 之父／母。
          source:
            id: s_WKZA2u0n1ON6z96B_28XHz
            source_type: api_record
            title: 中国历代人物传记资料库：王炫（CBDB 272149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272149&o=json
            external_identifier: CBDB:272149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zc7mv2e4ZRM13rfjpkZkya
        status: active
        display_name: 王玼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_s2pRuunsKs_RZt1I_7YnDP
        subject_person_id: p_C3UyF1t9PwmEJYY4zJQBV8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YFXpD1H4mYzD71g98dxSNt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZbPVHvUUR0rW7l5VYFMBC8
          claim_id: c_s2pRuunsKs_RZt1I_7YnDP
          source_id: s_WKZA2u0n1ON6z96B_28XHz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68280 王爌）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WKZA2u0n1ON6z96B_28XHz
            source_type: api_record
            title: 中国历代人物传记资料库：王炫（CBDB 272149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272149&o=json
            external_identifier: CBDB:272149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YFXpD1H4mYzD71g98dxSNt
        status: active
        display_name: 王爌
        merged_into_person_id: null
---

# 王炫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炫 | accepted |
| bio.summary | 王炫，明人物。弘治十五年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 272149） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Zc7mv2e4ZRM13rfjpkZkya | 王玼 | accepted |
| other | p_YFXpD1H4mYzD71g98dxSNt | 王爌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王炫（CBDB 272149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272149&o=json)
