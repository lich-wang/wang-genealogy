---
schema: wang-person/v1
id: p_5pYb5XTgHHLxK22eWK3gGJ
status: active
merged_into: null
display_name: 王胤
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G7ZaeLDNjmQKses3akE54H
        subject_person_id: p_5pYb5XTgHHLxK22eWK3gGJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UmNtZqWafENWTpG9SLsAK5
          claim_id: c_G7ZaeLDNjmQKses3akE54H
          source_id: s_uqTPXPLZ1jq81Zv8LxfMNp
          stance: supports
          locator: CBDB:214282
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214282）
          source: &a1
            id: s_uqTPXPLZ1jq81Zv8LxfMNp
            source_type: api_record
            title: 中国历代人物传记资料库：王胤（CBDB 214282）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214282&o=json
            external_identifier: CBDB:214282
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.155Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f8BZ16Ytef4eS52WiAZ1DE
        subject_person_id: p_5pYb5XTgHHLxK22eWK3gGJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胤，明人物。萬曆二年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 214282）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BvpzkmwVfne8KWuIBItVwv
          claim_id: c_f8BZ16Ytef4eS52WiAZ1DE
          source_id: s_uqTPXPLZ1jq81Zv8LxfMNp
          stance: supports
          locator: CBDB:214282
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ESscrSmKwRTyOM5P7ZclQR
        subject_person_id: p_5pYb5XTgHHLxK22eWK3gGJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nZ6oVMjM9PndsMQA7hdBnN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T-OR_FUseURIanwdfunqDJ
          claim_id: c_ESscrSmKwRTyOM5P7ZclQR
          source_id: s_uqTPXPLZ1jq81Zv8LxfMNp
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百一十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nZ6oVMjM9PndsMQA7hdBnN
        status: active
        display_name: 王致中
        merged_into_person_id: null
    - claim:
        id: c_II-MZWTV2O-hJb6OTq2G7N
        subject_person_id: p_5pYb5XTgHHLxK22eWK3gGJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8ZAAkFtprZpFjUiPcs2EKG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sOwN5-G1UjE3-Iqry3VGv7
          claim_id: c_II-MZWTV2O-hJb6OTq2G7N
          source_id: s_45K1T755vUhPOn--x9gQX_
          stance: supports
          locator: CBDB：兄弟 王致中（206164）之父／母 王胤
          quotation: null
          interpretation_note: 由兄弟关系推断：王建中 与 王致中 为同胞（CBDB 记「弟」），王致中 之父／母即 王建中 之父／母。
          source:
            id: s_45K1T755vUhPOn--x9gQX_
            source_type: api_record
            title: 中国历代人物传记资料库：王建中（CBDB 214286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214286&o=json
            external_identifier: CBDB:214286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8ZAAkFtprZpFjUiPcs2EKG
        status: active
        display_name: 王建中
        merged_into_person_id: null
    - claim:
        id: c_99UBznZgsYABp6R50woNBx
        subject_person_id: p_5pYb5XTgHHLxK22eWK3gGJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hsu81w62CyDWAH8ckMUWpc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QUv-Y301obHq7uYDqoCxOE
          claim_id: c_99UBznZgsYABp6R50woNBx
          source_id: s_p57qJ76-UaxJOQnbwZMn-6
          stance: supports
          locator: CBDB：兄弟 王致中（206164）之父／母 王胤
          quotation: null
          interpretation_note: 由兄弟关系推断：王立中 与 王致中 为同胞（CBDB 记「弟」），王致中 之父／母即 王立中 之父／母。
          source:
            id: s_p57qJ76-UaxJOQnbwZMn-6
            source_type: api_record
            title: 中国历代人物传记资料库：王立中（CBDB 214287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214287&o=json
            external_identifier: CBDB:214287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Hsu81w62CyDWAH8ckMUWpc
        status: active
        display_name: 王立中
        merged_into_person_id: null
    - claim:
        id: c_jcX_-8tUXvvMLRYRepfZq2
        subject_person_id: p_5pYb5XTgHHLxK22eWK3gGJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qZVUJP1g7SnCf6ZeRGtd5a
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M4q7OYgen_W11Y_TQ1ckCG
          claim_id: c_jcX_-8tUXvvMLRYRepfZq2
          source_id: s_zZqZdlpaoeE1lQZ20KHwea
          stance: supports
          locator: CBDB：兄弟 王致中（206164）之父／母 王胤
          quotation: null
          interpretation_note: 由兄弟关系推断：王行中 与 王致中 为同胞（CBDB 记「弟」），王致中 之父／母即 王行中 之父／母。
          source:
            id: s_zZqZdlpaoeE1lQZ20KHwea
            source_type: api_record
            title: 中国历代人物传记资料库：王行中（CBDB 214288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214288&o=json
            external_identifier: CBDB:214288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qZVUJP1g7SnCf6ZeRGtd5a
        status: active
        display_name: 王行中
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王胤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王胤 | accepted |
| bio.summary | 王胤，明人物。萬曆二年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 214282） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_nZ6oVMjM9PndsMQA7hdBnN | 王致中 | accepted |
| children | p_8ZAAkFtprZpFjUiPcs2EKG | 王建中 | accepted |
| children | p_Hsu81w62CyDWAH8ckMUWpc | 王立中 | accepted |
| children | p_qZVUJP1g7SnCf6ZeRGtd5a | 王行中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王建中（CBDB 214286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214286&o=json)
- [中国历代人物传记资料库：王立中（CBDB 214287）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214287&o=json)
- [中国历代人物传记资料库：王行中（CBDB 214288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214288&o=json)
- [中国历代人物传记资料库：王胤（CBDB 214282）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214282&o=json)
