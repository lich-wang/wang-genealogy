---
schema: wang-person/v1
id: p_4H62vCdFCPfwbu588ZF5Rs
status: active
merged_into: null
display_name: 王紀
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eCQ3xfrPxb127LKCpZSxxn
        subject_person_id: p_4H62vCdFCPfwbu588ZF5Rs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nds7TQXrPN9n91L42ddezx
          claim_id: c_eCQ3xfrPxb127LKCpZSxxn
          source_id: s_13pFUK9EhwCPb57i3vxCDB
          stance: supports
          locator: CBDB:252483
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（252483）
          source: &a1
            id: s_13pFUK9EhwCPb57i3vxCDB
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 252483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252483&o=json
            external_identifier: CBDB:252483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.267Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2VFYTB4hB7xrxG7GNrayQp
        subject_person_id: p_4H62vCdFCPfwbu588ZF5Rs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀，明人物。成化十四年進士，籍贯祥符，曾任儀賓。（中国历代人物传记资料库 CBDB 252483）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nwbyIG8yLM_2CGR9i-FXuo
          claim_id: c_2VFYTB4hB7xrxG7GNrayQp
          source_id: s_13pFUK9EhwCPb57i3vxCDB
          stance: supports
          locator: CBDB:252483
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_s7WFXWdVwVgoeAhUatjfjl
        subject_person_id: p_4H62vCdFCPfwbu588ZF5Rs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5841EMmKzggT2c8As9ptEU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4JVd1lZv7sPhEYw45ZVENw
          claim_id: c_s7WFXWdVwVgoeAhUatjfjl
          source_id: s_13pFUK9EhwCPb57i3vxCDB
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第八十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5841EMmKzggT2c8As9ptEU
        status: active
        display_name: 王鯨
        merged_into_person_id: null
    - claim:
        id: c_B-_at9KhArY-Sqt0iS4UFM
        subject_person_id: p_4H62vCdFCPfwbu588ZF5Rs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A8Z93GuDgFG2FMKQKv6D3n
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9t6D0GcXK4CGVxSTypceRb
          claim_id: c_B-_at9KhArY-Sqt0iS4UFM
          source_id: s_4YHSY5Zr6UL3ciq-FlxMGa
          stance: supports
          locator: CBDB：兄弟 王鯨（200003）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王鯆 与 王鯨 为同胞（CBDB 记「兄」），王鯨 之父／母即 王鯆 之父／母。
          source:
            id: s_4YHSY5Zr6UL3ciq-FlxMGa
            source_type: api_record
            title: 中国历代人物传记资料库：王鯆（CBDB 252489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252489&o=json
            external_identifier: CBDB:252489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A8Z93GuDgFG2FMKQKv6D3n
        status: active
        display_name: 王鯆
        merged_into_person_id: null
    - claim:
        id: c_ALZxIWWdQWUj5m8QDhqt53
        subject_person_id: p_4H62vCdFCPfwbu588ZF5Rs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BDhawx8iXZJKPaS9cRok8X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q7kjMiejJM9UzMKp6ms7t3
          claim_id: c_ALZxIWWdQWUj5m8QDhqt53
          source_id: s_Fr8GC0x6DNI-8bvwgSg6tY
          stance: supports
          locator: CBDB：兄弟 王鯨（200003）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王鯤 与 王鯨 为同胞（CBDB 记「弟」），王鯨 之父／母即 王鯤 之父／母。
          source:
            id: s_Fr8GC0x6DNI-8bvwgSg6tY
            source_type: api_record
            title: 中国历代人物传记资料库：王鯤（CBDB 252487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252487&o=json
            external_identifier: CBDB:252487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BDhawx8iXZJKPaS9cRok8X
        status: active
        display_name: 王鯤
        merged_into_person_id: null
    - claim:
        id: c_M2WUZi4MMe6ZRVAHDC7M3F
        subject_person_id: p_4H62vCdFCPfwbu588ZF5Rs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RF6P586VjzeCuJsE4cGyJg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MEtJzju9zSXRWubEXhdW9b
          claim_id: c_M2WUZi4MMe6ZRVAHDC7M3F
          source_id: s_XEoc6ZKhyEQ8YfB5jjk1Gx
          stance: supports
          locator: CBDB：兄弟 王鯨（200003）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王鯉 与 王鯨 为同胞（CBDB 记「弟」），王鯨 之父／母即 王鯉 之父／母。
          source:
            id: s_XEoc6ZKhyEQ8YfB5jjk1Gx
            source_type: api_record
            title: 中国历代人物传记资料库：王鯉（CBDB 252488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252488&o=json
            external_identifier: CBDB:252488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RF6P586VjzeCuJsE4cGyJg
        status: active
        display_name: 王鯉
        merged_into_person_id: null
    - claim:
        id: c_8ccqbuY6-a2_9C6wF0g74h
        subject_person_id: p_4H62vCdFCPfwbu588ZF5Rs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o5UKvHECYKG2228iAHWXcr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WH2eoTwj8-ziNG-a7Nk00O
          claim_id: c_8ccqbuY6-a2_9C6wF0g74h
          source_id: s_QYxjR8-05IZ8eF37md49Aw
          stance: supports
          locator: CBDB：兄弟 王鯨（200003）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王鱗 与 王鯨 为同胞（CBDB 记「兄」），王鯨 之父／母即 王鱗 之父／母。
          source:
            id: s_QYxjR8-05IZ8eF37md49Aw
            source_type: api_record
            title: 中国历代人物传记资料库：王鱗（CBDB 252491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252491&o=json
            external_identifier: CBDB:252491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_o5UKvHECYKG2228iAHWXcr
        status: active
        display_name: 王鱗
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王紀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紀 | accepted |
| bio.summary | 王紀，明人物。成化十四年進士，籍贯祥符，曾任儀賓。（中国历代人物传记资料库 CBDB 252483） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5841EMmKzggT2c8As9ptEU | 王鯨 | accepted |
| children | p_A8Z93GuDgFG2FMKQKv6D3n | 王鯆 | accepted |
| children | p_BDhawx8iXZJKPaS9cRok8X | 王鯤 | accepted |
| children | p_RF6P586VjzeCuJsE4cGyJg | 王鯉 | accepted |
| children | p_o5UKvHECYKG2228iAHWXcr | 王鱗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紀（CBDB 252483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252483&o=json)
- [中国历代人物传记资料库：王鯤（CBDB 252487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252487&o=json)
- [中国历代人物传记资料库：王鯉（CBDB 252488）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252488&o=json)
- [中国历代人物传记资料库：王鱗（CBDB 252491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252491&o=json)
- [中国历代人物传记资料库：王鯆（CBDB 252489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252489&o=json)
