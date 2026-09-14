---
schema: wang-person/v1
id: p_zG56y8x7pqkxtgFTWhmQg9
status: active
merged_into: null
display_name: 王誼
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gBD12CHhWCVjzc7JqK2kiT
        subject_person_id: p_zG56y8x7pqkxtgFTWhmQg9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aMhqC29DpJ6BHnAReaT5VR
          claim_id: c_gBD12CHhWCVjzc7JqK2kiT
          source_id: s_YDC6EMZ66CnAuQqwFq9M51
          stance: supports
          locator: CBDB:338659
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（338659）
          source: &a1
            id: s_YDC6EMZ66CnAuQqwFq9M51
            source_type: api_record
            title: 中国历代人物传记资料库：王誼（CBDB 338659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338659&o=json
            external_identifier: CBDB:338659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.558Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qPcxWzcxXJzv9SwYWwiAWG
        subject_person_id: p_zG56y8x7pqkxtgFTWhmQg9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1425年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qXbJdnPsWiSpvNhQpt5dtR
          claim_id: c_qPcxWzcxXJzv9SwYWwiAWG
          source_id: s_YDC6EMZ66CnAuQqwFq9M51
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JaKzGr6XJDwr4HZ7oRp4UK
        subject_person_id: p_zG56y8x7pqkxtgFTWhmQg9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誼（生于1425年），明人物。明清進士進士，籍贯江陰，入仕進士。（中国历代人物传记资料库 CBDB 338659）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qywAb5XsIh0U60FF9-lPZ6
          claim_id: c_JaKzGr6XJDwr4HZ7oRp4UK
          source_id: s_YDC6EMZ66CnAuQqwFq9M51
          stance: supports
          locator: CBDB:338659
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Pp86SLwOf6A_O-y-aFCPG9
        subject_person_id: p_CX91KvfdeRt8fZYDwoqM3n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zG56y8x7pqkxtgFTWhmQg9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fyqLffM4ZPX9afnZmDZ1Zi
          claim_id: c_Pp86SLwOf6A_O-y-aFCPG9
          source_id: s_R25MocnkkRC1cYQxV67dEy
          stance: supports
          locator: 天順四年進士登科錄:一卷，第二甲第三十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_R25MocnkkRC1cYQxV67dEy
            source_type: api_record
            title: 中国历代人物传记资料库：王逵（CBDB 313184）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313184&o=json
            external_identifier: CBDB:313184
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.900Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CX91KvfdeRt8fZYDwoqM3n
        status: active
        display_name: 王逵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_EXo1L0ndMiYYgw_YQjh83w
        subject_person_id: p_5dr458nf32Cw3FG7c7kKvd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zG56y8x7pqkxtgFTWhmQg9
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HgyjBRCDdb9k_XdjwaelYY
          claim_id: c_EXo1L0ndMiYYgw_YQjh83w
          source_id: s_cLBuAQZw32aGHXQr2QnoAs
          stance: supports
          locator: 天順四年進士登科錄:一卷，第二甲第三十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cLBuAQZw32aGHXQr2QnoAs
            source_type: api_record
            title: 中国历代人物传记资料库：王弘（CBDB 313173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313173&o=json
            external_identifier: CBDB:313173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.900Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5dr458nf32Cw3FG7c7kKvd
        status: active
        display_name: 王弘
        merged_into_person_id: null
    - claim:
        id: c_LUQu4L5uJSkZdDyc5NzqEQ
        subject_person_id: p_YBSqYaVfnPx98ed1MMRx1Z
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zG56y8x7pqkxtgFTWhmQg9
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gwBQ2zqS6Yhqt-xT-mjfla
          claim_id: c_LUQu4L5uJSkZdDyc5NzqEQ
          source_id: s_mEhPwS88pMrUi7G1958SKf
          stance: supports
          locator: 天順四年進士登科錄:一卷，第二甲第三十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mEhPwS88pMrUi7G1958SKf
            source_type: api_record
            title: 中国历代人物传记资料库：王采（CBDB 313162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313162&o=json
            external_identifier: CBDB:313162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.900Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YBSqYaVfnPx98ed1MMRx1Z
        status: active
        display_name: 王采
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_c3Nb0kXvF63m7GX-SyEuI7
        subject_person_id: p_g5bi22C4Ho2YzmRhDdv7VD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zG56y8x7pqkxtgFTWhmQg9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gk7OFQN57SUO-BeKmdm9tT
          claim_id: c_c3Nb0kXvF63m7GX-SyEuI7
          source_id: s_8JBMTS07OT5-qEL6YwFUqj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 338659 王誼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8JBMTS07OT5-qEL6YwFUqj
            source_type: api_record
            title: 中国历代人物传记资料库：王謨（CBDB 313218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313218&o=json
            external_identifier: CBDB:313218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g5bi22C4Ho2YzmRhDdv7VD
        status: active
        display_name: 王謨
        merged_into_person_id: null
---

# 王誼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誼 | accepted |
| birth.date | 1425年 | accepted |
| bio.summary | 王誼（生于1425年），明人物。明清進士進士，籍贯江陰，入仕進士。（中国历代人物传记资料库 CBDB 338659） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CX91KvfdeRt8fZYDwoqM3n | 王逵 | accepted |
| ancestors | p_5dr458nf32Cw3FG7c7kKvd | 王弘 | accepted |
| ancestors | p_YBSqYaVfnPx98ed1MMRx1Z | 王采 | accepted |
| other | p_g5bi22C4Ho2YzmRhDdv7VD | 王謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王采（CBDB 313162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313162&o=json)
- [中国历代人物传记资料库：王弘（CBDB 313173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313173&o=json)
- [中国历代人物传记资料库：王逵（CBDB 313184）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313184&o=json)
- [中国历代人物传记资料库：王謨（CBDB 313218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313218&o=json)
- [中国历代人物传记资料库：王誼（CBDB 338659）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338659&o=json)
