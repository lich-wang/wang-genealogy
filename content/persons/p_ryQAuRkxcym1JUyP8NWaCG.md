---
schema: wang-person/v1
id: p_ryQAuRkxcym1JUyP8NWaCG
status: active
merged_into: null
display_name: 王藎
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_u3BPn2GQK5RTHB8YvEq2G5
        subject_person_id: p_ryQAuRkxcym1JUyP8NWaCG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jCAFSyvjhUANmGLA2NtH1z
          claim_id: c_u3BPn2GQK5RTHB8YvEq2G5
          source_id: s_LjMRu2i98Z799gRhG3Yunn
          stance: supports
          locator: CBDB:126860
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126860）
          source: &a1
            id: s_LjMRu2i98Z799gRhG3Yunn
            source_type: api_record
            title: 中国历代人物传记资料库：王藎（CBDB 126860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126860&o=json
            external_identifier: CBDB:126860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.264Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jFrdAFAVfGsUXrzqkuJ3R4
        subject_person_id: p_ryQAuRkxcym1JUyP8NWaCG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藎，明人物。明清進士進士，籍贯錦衣衛，入仕進士，曾任巡撫右副都御史。（中国历代人物传记资料库 CBDB 126860）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tqlZq5Dy0LfF3hqgviZ6Hm
          claim_id: c_jFrdAFAVfGsUXrzqkuJ3R4
          source_id: s_LjMRu2i98Z799gRhG3Yunn
          stance: supports
          locator: CBDB:126860
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_GnhAaQQ4LxSawSCcG7G6UV
        status: active
        display_name: 王端
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_oSjOOmyLYL0lWIiPZhAnOW
        subject_person_id: p_bES4rRr9KHWRHyBtt2iz2m
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ryQAuRkxcym1JUyP8NWaCG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W0bzmR54LuqhOq2KsCJjSq
          claim_id: c_oSjOOmyLYL0lWIiPZhAnOW
          source_id: s_TjwK8hG1FCZEGPXmJ52pBj
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TjwK8hG1FCZEGPXmJ52pBj
            source_type: api_record
            title: 中国历代人物传记资料库：王整（CBDB 266936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266936&o=json
            external_identifier: CBDB:266936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.740Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bES4rRr9KHWRHyBtt2iz2m
        status: active
        display_name: 王整
        merged_into_person_id: null
    - claim:
        id: c_1JObqHCaqxm96WCFHb-DaO
        subject_person_id: p_rr4diTY4mwqa6m1AdeML55
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ryQAuRkxcym1JUyP8NWaCG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A2fEHPO1HX_wHvzf6vg6tY
          claim_id: c_1JObqHCaqxm96WCFHb-DaO
          source_id: s_7BeNVARVZZCR6NwYSfFDGi
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7BeNVARVZZCR6NwYSfFDGi
            source_type: api_record
            title: 中国历代人物传记资料库：王志友（CBDB 266935）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266935&o=json
            external_identifier: CBDB:266935
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_rr4diTY4mwqa6m1AdeML55
        status: active
        display_name: 王志友
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王藎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王藎 | accepted |
| bio.summary | 王藎，明人物。明清進士進士，籍贯錦衣衛，入仕進士，曾任巡撫右副都御史。（中国历代人物传记资料库 CBDB 126860） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GnhAaQQ4LxSawSCcG7G6UV | 王端 | accepted |
| ancestors | p_bES4rRr9KHWRHyBtt2iz2m | 王整 | accepted |
| ancestors | p_rr4diTY4mwqa6m1AdeML55 | 王志友 | accepted |

## 外部来源

- [中国历代人物传记资料库：王端（CBDB 266938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266938&o=json)
- [中国历代人物传记资料库：王藎（CBDB 126860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126860&o=json)
- [中国历代人物传记资料库：王整（CBDB 266936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266936&o=json)
- [中国历代人物传记资料库：王志友（CBDB 266935）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266935&o=json)
