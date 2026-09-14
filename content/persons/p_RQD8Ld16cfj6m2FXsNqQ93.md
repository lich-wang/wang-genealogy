---
schema: wang-person/v1
id: p_RQD8Ld16cfj6m2FXsNqQ93
status: active
merged_into: null
display_name: 王芑
cbdb_id: 222173
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f75ThY7HPNhJfqDWj5VvqX
        subject_person_id: p_RQD8Ld16cfj6m2FXsNqQ93
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芑，明人物。萬曆十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 222173）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_jPvyPWDNYcqfsROPXUhYMn
          claim_id: c_f75ThY7HPNhJfqDWj5VvqX
          source_id: s_ooXrQ6gWXtdshVZDMkS9ZC
          stance: supports
          locator: CBDB:222173
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ooXrQ6gWXtdshVZDMkS9ZC
            source_type: api_record
            title: 中国历代人物传记资料库：王芑（CBDB 222173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222173&o=json
            external_identifier: CBDB:222173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y7Bbk2oZ4YTX6De9jKU5yv
        subject_person_id: p_RQD8Ld16cfj6m2FXsNqQ93
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_N7A6gL2mJzZAq4cq7c4avQ
          claim_id: c_Y7Bbk2oZ4YTX6De9jKU5yv
          source_id: s_ooXrQ6gWXtdshVZDMkS9ZC
          stance: supports
          locator: CBDB:222173
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gYO6qG2X6weKM__q1Vkyta
        subject_person_id: p_miQBcK4jqJAfweCMT7iV4p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RQD8Ld16cfj6m2FXsNqQ93
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6n9u9-PDc8Krgh0vSlMe5v
          claim_id: c_gYO6qG2X6weKM__q1Vkyta
          source_id: s_tvSkseHmDQHKJPbMcmPbPw
          stance: supports
          locator: CBDB：兄弟 王荁（206722）之父／母 王交
          quotation: null
          interpretation_note: 由兄弟关系推断：王芑 与 王荁 为同胞（CBDB 记「弟」），王荁 之父／母即 王芑 之父／母。
          source:
            id: s_tvSkseHmDQHKJPbMcmPbPw
            source_type: api_record
            title: 中国历代人物传记资料库：王芑（CBDB 222173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222173&o=json
            external_identifier: CBDB:222173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_miQBcK4jqJAfweCMT7iV4p
        status: active
        display_name: 王交
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_vE-DDopEuO1bSlR6qYwcfX
        subject_person_id: p_RQD8Ld16cfj6m2FXsNqQ93
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GSfGKwtllNO-jI2-3YKUI2
          claim_id: c_vE-DDopEuO1bSlR6qYwcfX
          source_id: s_tvSkseHmDQHKJPbMcmPbPw
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206722 王荁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tvSkseHmDQHKJPbMcmPbPw
            source_type: api_record
            title: 中国历代人物传记资料库：王芑（CBDB 222173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222173&o=json
            external_identifier: CBDB:222173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ahJ97i6Ls8wgTe2hMc2p2s
        status: active
        display_name: 王荁
        merged_into_person_id: null
---

# 王芑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王芑，明人物。萬曆十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 222173） | accepted |
| name.primary | 王芑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_miQBcK4jqJAfweCMT7iV4p | 王交 | accepted |
| other | p_ahJ97i6Ls8wgTe2hMc2p2s | 王荁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王芑（CBDB 222173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222173&o=json)
