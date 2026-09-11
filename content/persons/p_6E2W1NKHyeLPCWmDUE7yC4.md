---
schema: wang-person/v1
id: p_6E2W1NKHyeLPCWmDUE7yC4
status: active
merged_into: null
display_name: 王甫禮
cbdb_id: 337144
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mhhLYHF5DTnqDs4vuzaBaj
        subject_person_id: p_6E2W1NKHyeLPCWmDUE7yC4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甫禮，明人物。中国历代人物传记资料库（CBDB）以人物编号 337144 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_DOd2LAyiMucXkfkYXzzI27
          claim_id: c_mhhLYHF5DTnqDs4vuzaBaj
          source_id: s_LGp9qscXZ3JgaK3KFVoDVK
          stance: supports
          locator: CBDB:337144
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_LGp9qscXZ3JgaK3KFVoDVK
            source_type: api_record
            title: 中国历代人物传记资料库：王甫禮（CBDB 337144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337144&o=json
            external_identifier: CBDB:337144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iHNAvBsXmCMykg5J5xJpDu
        subject_person_id: p_6E2W1NKHyeLPCWmDUE7yC4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甫禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nFHd7pQ57hNiVEkP9Fhu9G
          claim_id: c_iHNAvBsXmCMykg5J5xJpDu
          source_id: s_LGp9qscXZ3JgaK3KFVoDVK
          stance: supports
          locator: CBDB:337144
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_LGp9qscXZ3JgaK3KFVoDVK
            source_type: api_record
            title: 中国历代人物传记资料库：王甫禮（CBDB 337144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337144&o=json
            external_identifier: CBDB:337144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_4RAeiXpC7J4fc0u83u0TZ0
        subject_person_id: p_6E2W1NKHyeLPCWmDUE7yC4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BMNf3Y1e3GX9M1tCr78uZv
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M8B4vkNyLs3Pnfx4RQY3hG
          claim_id: c_4RAeiXpC7J4fc0u83u0TZ0
          source_id: s_zmrfFWfwmHqZxrRkgGutK1
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第五十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zmrfFWfwmHqZxrRkgGutK1
            source_type: api_record
            title: 中国历代人物传记资料库：王臣（CBDB 126514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126514&o=json
            external_identifier: CBDB:126514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.993Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BMNf3Y1e3GX9M1tCr78uZv
        status: active
        display_name: 王臣
        merged_into_person_id: null
  other: []
---

# 王甫禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王甫禮，明人物。中国历代人物传记资料库（CBDB）以人物编号 337144 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王甫禮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_BMNf3Y1e3GX9M1tCr78uZv | 王臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王臣（CBDB 126514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126514&o=json)
- [中国历代人物传记资料库：王甫禮（CBDB 337144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337144&o=json)
