---
schema: wang-person/v1
id: p_GnhAaQQ4LxSawSCcG7G6UV
status: active
merged_into: null
display_name: 王端
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_As9iMWZ1L9AsgKjH3c9YjL
        subject_person_id: p_GnhAaQQ4LxSawSCcG7G6UV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3GJbmYZH83dAfhpjJAEYNS
          claim_id: c_As9iMWZ1L9AsgKjH3c9YjL
          source_id: s_75pZh8AALy5jTamyCy1h6Z
          stance: supports
          locator: CBDB:266938
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266938）
          source: &a1
            id: s_75pZh8AALy5jTamyCy1h6Z
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 266938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266938&o=json
            external_identifier: CBDB:266938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.741Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UwxKoodMF8HoPNebB5s14k
        subject_person_id: p_GnhAaQQ4LxSawSCcG7G6UV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端，明人物。弘治九年進士，籍贯濰縣。（中国历代人物传记资料库 CBDB 266938）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o40ZkYq5cNEb0gfD7ivC8z
          claim_id: c_UwxKoodMF8HoPNebB5s14k
          source_id: s_75pZh8AALy5jTamyCy1h6Z
          stance: supports
          locator: CBDB:266938
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__3pMzz5yYL7lRMjOjXtDhy
        subject_person_id: p_GnhAaQQ4LxSawSCcG7G6UV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ryQAuRkxcym1JUyP8NWaCG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cKQRIxdMO7lUvF1DbVzzWR
          claim_id: c__3pMzz5yYL7lRMjOjXtDhy
          source_id: s_75pZh8AALy5jTamyCy1h6Z
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ryQAuRkxcym1JUyP8NWaCG
        status: active
        display_name: 王藎
        merged_into_person_id: null
    - claim:
        id: c_x_DAUtPFx_NSIspBmlpF_M
        subject_person_id: p_GnhAaQQ4LxSawSCcG7G6UV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CpdA7n5ABuWVoWQ3BeCS1U
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JTeZAcI7g1oj8_KK7jqxwl
          claim_id: c_x_DAUtPFx_NSIspBmlpF_M
          source_id: s_3dd8SJY5tQywx2HKxb8GfH
          stance: supports
          locator: CBDB：兄弟 王藎（126860）之父／母 王端
          quotation: null
          interpretation_note: 由兄弟关系推断：王蘭 与 王藎 为同胞（CBDB 记「兄」），王藎 之父／母即 王蘭 之父／母。
          source:
            id: s_3dd8SJY5tQywx2HKxb8GfH
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭（CBDB 266941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266941&o=json
            external_identifier: CBDB:266941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CpdA7n5ABuWVoWQ3BeCS1U
        status: active
        display_name: 王蘭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王端 | accepted |
| bio.summary | 王端，明人物。弘治九年進士，籍贯濰縣。（中国历代人物传记资料库 CBDB 266938） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ryQAuRkxcym1JUyP8NWaCG | 王藎 | accepted |
| children | p_CpdA7n5ABuWVoWQ3BeCS1U | 王蘭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王端（CBDB 266938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266938&o=json)
- [中国历代人物传记资料库：王蘭（CBDB 266941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266941&o=json)
