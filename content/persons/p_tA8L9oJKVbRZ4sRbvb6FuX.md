---
schema: wang-person/v1
id: p_tA8L9oJKVbRZ4sRbvb6FuX
status: active
merged_into: null
display_name: 王三重
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ijU7LuotQGveT6rGHpHzrg
        subject_person_id: p_tA8L9oJKVbRZ4sRbvb6FuX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三重
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZysUiP7HKJ96TLVcux4moe
          claim_id: c_ijU7LuotQGveT6rGHpHzrg
          source_id: s_mQ4RCV9yNwXSJB7RWoQ177
          stance: supports
          locator: CBDB:224183
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（224183）
          source: &a1
            id: s_mQ4RCV9yNwXSJB7RWoQ177
            source_type: api_record
            title: 中国历代人物传记资料库：王三重（CBDB 224183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224183&o=json
            external_identifier: CBDB:224183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.431Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MbEXyNNE2P5aSzxDUtXv8z
        subject_person_id: p_tA8L9oJKVbRZ4sRbvb6FuX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三重，明人物。萬曆十一年進士，籍贯掖縣。（中国历代人物传记资料库 CBDB 224183）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TCTgn3fdbVJ9Rbka9SAjJu
          claim_id: c_MbEXyNNE2P5aSzxDUtXv8z
          source_id: s_mQ4RCV9yNwXSJB7RWoQ177
          stance: supports
          locator: CBDB:224183
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_CxkCfMWmASpxOQNEJZVVtC
        subject_person_id: p_tA8L9oJKVbRZ4sRbvb6FuX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_peUehXHPLMte3L7YPhiTwo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p-yDIggCe_v5n5R0zL4fix
          claim_id: c_CxkCfMWmASpxOQNEJZVVtC
          source_id: s_mQ4RCV9yNwXSJB7RWoQ177
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第一百二十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_peUehXHPLMte3L7YPhiTwo
        status: active
        display_name: 王夢鯉
        merged_into_person_id: null
    - claim:
        id: c_lAplLu29T2vlBbD8nG31ss
        subject_person_id: p_tA8L9oJKVbRZ4sRbvb6FuX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PeAPXHeFa7NUdx4rwt4PMH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7rNNz-zWVgTRTedfDRUlyp
          claim_id: c_lAplLu29T2vlBbD8nG31ss
          source_id: s_TSrHZoPHHciqWvRVoNUAbu
          stance: supports
          locator: CBDB：兄弟 王夢鯉（206856）之父／母 王三重
          quotation: null
          interpretation_note: 由兄弟关系推断：王夢驥 与 王夢鯉 为同胞（CBDB 记「兄」），王夢鯉 之父／母即 王夢驥 之父／母。
          source:
            id: s_TSrHZoPHHciqWvRVoNUAbu
            source_type: api_record
            title: 中国历代人物传记资料库：王夢驥（CBDB 224187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224187&o=json
            external_identifier: CBDB:224187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PeAPXHeFa7NUdx4rwt4PMH
        status: active
        display_name: 王夢驥
        merged_into_person_id: null
    - claim:
        id: c_UU17sGs-XRWKCh81fe0muD
        subject_person_id: p_tA8L9oJKVbRZ4sRbvb6FuX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fBj1NXZUcbt3aVj9zDcMeY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cAF2GWprX-_YmrWxnh-PXQ
          claim_id: c_UU17sGs-XRWKCh81fe0muD
          source_id: s_fgUXLz_P_Q164o1XEDrYqj
          stance: supports
          locator: CBDB：兄弟 王夢鯉（206856）之父／母 王三重
          quotation: null
          interpretation_note: 由兄弟关系推断：王夢豸 与 王夢鯉 为同胞（CBDB 记「兄」），王夢鯉 之父／母即 王夢豸 之父／母。
          source:
            id: s_fgUXLz_P_Q164o1XEDrYqj
            source_type: api_record
            title: 中国历代人物传记资料库：王夢豸（CBDB 224186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224186&o=json
            external_identifier: CBDB:224186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fBj1NXZUcbt3aVj9zDcMeY
        status: active
        display_name: 王夢豸
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王三重

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三重 | accepted |
| bio.summary | 王三重，明人物。萬曆十一年進士，籍贯掖縣。（中国历代人物传记资料库 CBDB 224183） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_peUehXHPLMte3L7YPhiTwo | 王夢鯉 | accepted |
| children | p_PeAPXHeFa7NUdx4rwt4PMH | 王夢驥 | accepted |
| children | p_fBj1NXZUcbt3aVj9zDcMeY | 王夢豸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢驥（CBDB 224187）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224187&o=json)
- [中国历代人物传记资料库：王夢豸（CBDB 224186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224186&o=json)
- [中国历代人物传记资料库：王三重（CBDB 224183）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224183&o=json)
