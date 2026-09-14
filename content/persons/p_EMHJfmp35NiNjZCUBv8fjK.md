---
schema: wang-person/v1
id: p_EMHJfmp35NiNjZCUBv8fjK
status: active
merged_into: null
display_name: 王斌
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j2GRXsos2xerM1S8LsD5AU
        subject_person_id: p_EMHJfmp35NiNjZCUBv8fjK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CLBjSpDSMVFjNANJ84VgCS
          claim_id: c_j2GRXsos2xerM1S8LsD5AU
          source_id: s_jmA1h6Aat9Ajfn5w815ucH
          stance: supports
          locator: CBDB:250837
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（250837）
          source: &a1
            id: s_jmA1h6Aat9Ajfn5w815ucH
            source_type: api_record
            title: 中国历代人物传记资料库：王斌（CBDB 250837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250837&o=json
            external_identifier: CBDB:250837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.237Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TfAUxLmdcXkRxFfTrHuHLe
        subject_person_id: p_EMHJfmp35NiNjZCUBv8fjK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斌，明人物。成化十四年進士，籍贯虹縣。（中国历代人物传记资料库 CBDB 250837）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iRUoT1Lr6uT2nGpk0-xdUQ
          claim_id: c_TfAUxLmdcXkRxFfTrHuHLe
          source_id: s_jmA1h6Aat9Ajfn5w815ucH
          stance: supports
          locator: CBDB:250837
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_d1wGOoVKfqc_bwX7myk5X-
        subject_person_id: p_EMHJfmp35NiNjZCUBv8fjK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6qn5pH8ZsdNHGV4KR7haUQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lkfQPI6sfNGj5sLBJmI_YD
          claim_id: c_d1wGOoVKfqc_bwX7myk5X-
          source_id: s_4nhiP9s1yMStRe39TKXhcx
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第二甲第十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4nhiP9s1yMStRe39TKXhcx
            source_type: api_record
            title: 中国历代人物传记资料库：王楫（CBDB 199876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199876&o=json
            external_identifier: CBDB:199876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.581Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6qn5pH8ZsdNHGV4KR7haUQ
        status: active
        display_name: 王楫
        merged_into_person_id: null
    - claim:
        id: c_9UEK4P8m6F4QuxJ7BdhsHY
        subject_person_id: p_EMHJfmp35NiNjZCUBv8fjK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ATT7KfmJN5jo5itxcH6T9U
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HoPfO4h0-bLHMfq5eObmjv
          claim_id: c_9UEK4P8m6F4QuxJ7BdhsHY
          source_id: s_7wD51Vl7dHc3--JXC2dqDG
          stance: supports
          locator: CBDB：兄弟 王楫（199876）之父／母 王斌
          quotation: null
          interpretation_note: 由兄弟关系推断：王樟 与 王楫 为同胞（CBDB 记「兄」），王楫 之父／母即 王樟 之父／母。
          source:
            id: s_7wD51Vl7dHc3--JXC2dqDG
            source_type: api_record
            title: 中国历代人物传记资料库：王樟（CBDB 250840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250840&o=json
            external_identifier: CBDB:250840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ATT7KfmJN5jo5itxcH6T9U
        status: active
        display_name: 王樟
        merged_into_person_id: null
    - claim:
        id: c_NXXWHtrDnPvRb83oUFse6d
        subject_person_id: p_EMHJfmp35NiNjZCUBv8fjK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_coLm749G7UJBN7FcsP6oZP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m8ZpZgb3UV5s-Mg54QmrfM
          claim_id: c_NXXWHtrDnPvRb83oUFse6d
          source_id: s_xpI93JIolj8HGBGCJyZUDX
          stance: supports
          locator: CBDB：兄弟 王楫（199876）之父／母 王斌
          quotation: null
          interpretation_note: 由兄弟关系推断：王櫓 与 王楫 为同胞（CBDB 记「兄」），王楫 之父／母即 王櫓 之父／母。
          source:
            id: s_xpI93JIolj8HGBGCJyZUDX
            source_type: api_record
            title: 中国历代人物传记资料库：王櫓（CBDB 250841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250841&o=json
            external_identifier: CBDB:250841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_coLm749G7UJBN7FcsP6oZP
        status: active
        display_name: 王櫓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王斌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王斌 | accepted |
| bio.summary | 王斌，明人物。成化十四年進士，籍贯虹縣。（中国历代人物传记资料库 CBDB 250837） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6qn5pH8ZsdNHGV4KR7haUQ | 王楫 | accepted |
| children | p_ATT7KfmJN5jo5itxcH6T9U | 王樟 | accepted |
| children | p_coLm749G7UJBN7FcsP6oZP | 王櫓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王斌（CBDB 250837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250837&o=json)
- [中国历代人物传记资料库：王楫（CBDB 199876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199876&o=json)
- [中国历代人物传记资料库：王櫓（CBDB 250841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250841&o=json)
- [中国历代人物传记资料库：王樟（CBDB 250840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250840&o=json)
