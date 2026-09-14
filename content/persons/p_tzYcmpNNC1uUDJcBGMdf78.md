---
schema: wang-person/v1
id: p_tzYcmpNNC1uUDJcBGMdf78
status: active
merged_into: null
display_name: 王倬
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wb4HELiaEEK6qfkhq2Y65k
        subject_person_id: p_tzYcmpNNC1uUDJcBGMdf78
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wjpjPDrZo2k43rCKuatqey
          claim_id: c_wb4HELiaEEK6qfkhq2Y65k
          source_id: s_PWgoyS6CtH9bZMFvxfX6eR
          stance: supports
          locator: CBDB:214686
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214686）
          source: &a1
            id: s_PWgoyS6CtH9bZMFvxfX6eR
            source_type: api_record
            title: 中国历代人物传记资料库：王倬（CBDB 214686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214686&o=json
            external_identifier: CBDB:214686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.165Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Vnw1p9FUcRPWpB5FwBDixS
        subject_person_id: p_tzYcmpNNC1uUDJcBGMdf78
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倬，明人物。萬曆二年進士，籍贯孟津。（中国历代人物传记资料库 CBDB 214686）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HOiZlhGP6Al73CKuMtkiba
          claim_id: c_Vnw1p9FUcRPWpB5FwBDixS
          source_id: s_PWgoyS6CtH9bZMFvxfX6eR
          stance: supports
          locator: CBDB:214686
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_l9-JyCrVZSmfScwe6vBFPv
        subject_person_id: p_Pgpmm7wnTqLY7xY2HfhhZC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tzYcmpNNC1uUDJcBGMdf78
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xIpX--e-bRR5_0BmVIxzOW
          claim_id: c_l9-JyCrVZSmfScwe6vBFPv
          source_id: s_wU21Za6-RnYiyL09Cz8Lmu
          stance: supports
          locator: CBDB：兄弟 王价（206196）之父／母 王繼乾
          quotation: null
          interpretation_note: 由兄弟关系推断：王倬 与 王价 为同胞（CBDB 记「兄」），王价 之父／母即 王倬 之父／母。
          source:
            id: s_wU21Za6-RnYiyL09Cz8Lmu
            source_type: api_record
            title: 中国历代人物传记资料库：王倬（CBDB 214686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214686&o=json
            external_identifier: CBDB:214686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Pgpmm7wnTqLY7xY2HfhhZC
        status: active
        display_name: 王繼乾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_QCzNlWABDRWUu72CaaAAA1
        subject_person_id: p_tzYcmpNNC1uUDJcBGMdf78
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_y879UiTRBKZaXHHY531ywf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GA9DzYGOxkMEQifAdPQmYu
          claim_id: c_QCzNlWABDRWUu72CaaAAA1
          source_id: s_wU21Za6-RnYiyL09Cz8Lmu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206196 王价）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wU21Za6-RnYiyL09Cz8Lmu
            source_type: api_record
            title: 中国历代人物传记资料库：王倬（CBDB 214686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214686&o=json
            external_identifier: CBDB:214686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y879UiTRBKZaXHHY531ywf
        status: active
        display_name: 王价
        merged_into_person_id: null
---

# 王倬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倬 | accepted |
| bio.summary | 王倬，明人物。萬曆二年進士，籍贯孟津。（中国历代人物传记资料库 CBDB 214686） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Pgpmm7wnTqLY7xY2HfhhZC | 王繼乾 | accepted |
| other | p_y879UiTRBKZaXHHY531ywf | 王价 | accepted |

## 外部来源

- [中国历代人物传记资料库：王倬（CBDB 214686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214686&o=json)
