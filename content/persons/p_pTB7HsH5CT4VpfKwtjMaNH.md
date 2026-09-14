---
schema: wang-person/v1
id: p_pTB7HsH5CT4VpfKwtjMaNH
status: active
merged_into: null
display_name: 王淵
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wGgjzDxF3NBgRp38UKGrt6
        subject_person_id: p_pTB7HsH5CT4VpfKwtjMaNH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WVqduATDyQVW5u83Xay63h
          claim_id: c_wGgjzDxF3NBgRp38UKGrt6
          source_id: s_Tu1VwVeXjMEWveB3L1tAHt
          stance: supports
          locator: CBDB:280635
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280635）
          source: &a1
            id: s_Tu1VwVeXjMEWveB3L1tAHt
            source_type: api_record
            title: 中国历代人物传记资料库：王淵（CBDB 280635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280635&o=json
            external_identifier: CBDB:280635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.018Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A4VHyLH5jX5AV9XY7sTvWg
        subject_person_id: p_pTB7HsH5CT4VpfKwtjMaNH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淵，明人物。正德十二年進士，籍贯萬安。（中国历代人物传记资料库 CBDB 280635）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OZA4UzlIVv61RYHxrg59SQ
          claim_id: c_A4VHyLH5jX5AV9XY7sTvWg
          source_id: s_Tu1VwVeXjMEWveB3L1tAHt
          stance: supports
          locator: CBDB:280635
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_W22EnvFTYQ5VDdR0QRQbog
        subject_person_id: p_pTB7HsH5CT4VpfKwtjMaNH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pUwZmXJA98H12Cyv9Q6e5y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qc_tXU088C2SxJmc0HepQh
          claim_id: c_W22EnvFTYQ5VDdR0QRQbog
          source_id: s_Tu1VwVeXjMEWveB3L1tAHt
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pUwZmXJA98H12Cyv9Q6e5y
        status: active
        display_name: 王時柯
        merged_into_person_id: null
    - claim:
        id: c_DFkjh8zErKGpMOd1sVfqCn
        subject_person_id: p_pTB7HsH5CT4VpfKwtjMaNH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VVg6dPsf61FvErE9grVHYX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qHsn3CAe7z--E9qANnODEX
          claim_id: c_DFkjh8zErKGpMOd1sVfqCn
          source_id: s_3VjuF1nC42b3LoSwHiUclE
          stance: supports
          locator: CBDB：兄弟 王時柯（68118）之父／母 王淵
          quotation: null
          interpretation_note: 由兄弟关系推断：王時某 与 王時柯 为同胞（CBDB 记「弟」），王時柯 之父／母即 王時某 之父／母。
          source:
            id: s_3VjuF1nC42b3LoSwHiUclE
            source_type: api_record
            title: 中国历代人物传记资料库：王時某（CBDB 280638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280638&o=json
            external_identifier: CBDB:280638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VVg6dPsf61FvErE9grVHYX
        status: active
        display_name: 王時某
        merged_into_person_id: null
    - claim:
        id: c_JLyssIAFPZGgkjg_VK_OaR
        subject_person_id: p_pTB7HsH5CT4VpfKwtjMaNH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xmkqssZLoj8LftLRofiQaa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bMj2wqraV_rnti4Augv5Zf
          claim_id: c_JLyssIAFPZGgkjg_VK_OaR
          source_id: s__xu6FzbC3r4uPXA0AbZo00
          stance: supports
          locator: CBDB：兄弟 王時柯（68118）之父／母 王淵
          quotation: null
          interpretation_note: 由兄弟关系推断：王時楷 与 王時柯 为同胞（CBDB 记「兄」），王時柯 之父／母即 王時楷 之父／母。
          source:
            id: s__xu6FzbC3r4uPXA0AbZo00
            source_type: api_record
            title: 中国历代人物传记资料库：王時楷（CBDB 280640）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280640&o=json
            external_identifier: CBDB:280640
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xmkqssZLoj8LftLRofiQaa
        status: active
        display_name: 王時楷
        merged_into_person_id: null
    - claim:
        id: c_BmVIAtYqwhK-yKwD-bey9f
        subject_person_id: p_pTB7HsH5CT4VpfKwtjMaNH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yhYTLXHLm8UcwAPMMHVfwb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xADt-bz9-wYOnemYol8XAq
          claim_id: c_BmVIAtYqwhK-yKwD-bey9f
          source_id: s_WBqUtuHB6JO5QXbZ5w5uio
          stance: supports
          locator: CBDB：兄弟 王時柯（68118）之父／母 王淵
          quotation: null
          interpretation_note: 由兄弟关系推断：王時某 与 王時柯 为同胞（CBDB 记「兄」），王時柯 之父／母即 王時某 之父／母。
          source:
            id: s_WBqUtuHB6JO5QXbZ5w5uio
            source_type: api_record
            title: 中国历代人物传记资料库：王時某（CBDB 280639）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280639&o=json
            external_identifier: CBDB:280639
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yhYTLXHLm8UcwAPMMHVfwb
        status: active
        display_name: 王時某
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王淵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淵 | accepted |
| bio.summary | 王淵，明人物。正德十二年進士，籍贯萬安。（中国历代人物传记资料库 CBDB 280635） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_pUwZmXJA98H12Cyv9Q6e5y | 王時柯 | accepted |
| children | p_VVg6dPsf61FvErE9grVHYX | 王時某 | accepted |
| children | p_xmkqssZLoj8LftLRofiQaa | 王時楷 | accepted |
| children | p_yhYTLXHLm8UcwAPMMHVfwb | 王時某 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時楷（CBDB 280640）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280640&o=json)
- [中国历代人物传记资料库：王時某（CBDB 280638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280638&o=json)
- [中国历代人物传记资料库：王時某（CBDB 280639）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280639&o=json)
- [中国历代人物传记资料库：王淵（CBDB 280635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280635&o=json)
