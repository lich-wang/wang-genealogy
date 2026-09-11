---
schema: wang-person/v1
id: p_E8y1MAzoBqFq8m9SnmCiAn
status: active
merged_into: null
display_name: 王棲
cbdb_id: 134046
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MT1fsLipnipNE4hyANhNEE
        subject_person_id: p_E8y1MAzoBqFq8m9SnmCiAn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棲，元人物。中国历代人物传记资料库（CBDB）以人物编号 134046 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_Z5RFK2HswF3KtUQTj-cmUT
          claim_id: c_MT1fsLipnipNE4hyANhNEE
          source_id: s_CFTdFjYy3fw8Ku8JrKKBxc
          stance: supports
          locator: CBDB:134046
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_CFTdFjYy3fw8Ku8JrKKBxc
            source_type: api_record
            title: 中国历代人物传记资料库：王棲（CBDB 134046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134046&o=json
            external_identifier: CBDB:134046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Rtq3bLbLgnveXv9dwoVuEE
        subject_person_id: p_E8y1MAzoBqFq8m9SnmCiAn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_F3jUe9bjqj56iSPkJ55HfA
          claim_id: c_Rtq3bLbLgnveXv9dwoVuEE
          source_id: s_CFTdFjYy3fw8Ku8JrKKBxc
          stance: supports
          locator: CBDB:134046
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 元
          source:
            id: s_CFTdFjYy3fw8Ku8JrKKBxc
            source_type: api_record
            title: 中国历代人物传记资料库：王棲（CBDB 134046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134046&o=json
            external_identifier: CBDB:134046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_5z0DSdxAGh-YJQQgH26-Di
        subject_person_id: p_E8y1MAzoBqFq8m9SnmCiAn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gwVUKjMQycQaZ6UR2zvJFs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dGHQoNfnRnJwNDMW4uHEc7
          claim_id: c_5z0DSdxAGh-YJQQgH26-Di
          source_id: s_oBoM5ZPjLx797LqUayBpbH
          stance: supports
          locator: 宋濂全集，1195：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oBoM5ZPjLx797LqUayBpbH
            source_type: api_record
            title: 中国历代人物传记资料库：王順（CBDB 100852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100852&o=json
            external_identifier: CBDB:100852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.508Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gwVUKjMQycQaZ6UR2zvJFs
        status: active
        display_name: 王順
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王棲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王棲，元人物。中国历代人物传记资料库（CBDB）以人物编号 134046 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王棲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_gwVUKjMQycQaZ6UR2zvJFs | 王順 | accepted |

## 外部来源

- [中国历代人物传记资料库：王棲（CBDB 134046）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134046&o=json)
- [中国历代人物传记资料库：王順（CBDB 100852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100852&o=json)
