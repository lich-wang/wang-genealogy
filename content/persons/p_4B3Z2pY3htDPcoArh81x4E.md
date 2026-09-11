---
schema: wang-person/v1
id: p_4B3Z2pY3htDPcoArh81x4E
status: active
merged_into: null
display_name: 王紹勍
cbdb_id: 26283
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qXrCNVhbQq4138cYVQqDvG
        subject_person_id: p_4B3Z2pY3htDPcoArh81x4E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹勍，宋人物。中国历代人物传记资料库（CBDB）以人物编号 26283 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_4JdijcZjXSQd8zUqwTketM
          claim_id: c_qXrCNVhbQq4138cYVQqDvG
          source_id: s_3ASkyFz29iQp4cjALUx9Hm
          stance: supports
          locator: CBDB:26283
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_3ASkyFz29iQp4cjALUx9Hm
            source_type: api_record
            title: 中国历代人物传记资料库：王紹勍（CBDB 26283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26283&o=json
            external_identifier: CBDB:26283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Kboud12NvtXVJpLy2F6MED
        subject_person_id: p_4B3Z2pY3htDPcoArh81x4E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹勍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_zh6xmS69YFqvF5FNE3oKn7
          claim_id: c_Kboud12NvtXVJpLy2F6MED
          source_id: s_3ASkyFz29iQp4cjALUx9Hm
          stance: supports
          locator: CBDB:26283
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_3ASkyFz29iQp4cjALUx9Hm
            source_type: api_record
            title: 中国历代人物传记资料库：王紹勍（CBDB 26283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26283&o=json
            external_identifier: CBDB:26283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_q16A7jG6TB8mhNA-HnzSbl
        subject_person_id: p_hRvAgYgc5uXsKsTmmvuvBy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4B3Z2pY3htDPcoArh81x4E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tjUk1euLZxpKhMYVHeIOkO
          claim_id: c_q16A7jG6TB8mhNA-HnzSbl
          source_id: s_9abeqPChX55sF6JbG84wKe
          stance: supports
          locator: CBDB 双向互证（子 王紹勍 ⇄ 父 王惟恭）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_9abeqPChX55sF6JbG84wKe
            source_type: api_record
            title: 中国历代人物传记资料库：王惟恭（CBDB 26282）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26282&o=json
            external_identifier: CBDB:26282
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.929Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hRvAgYgc5uXsKsTmmvuvBy
        status: active
        display_name: 王惟恭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王紹勍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王紹勍，宋人物。中国历代人物传记资料库（CBDB）以人物编号 26283 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王紹勍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hRvAgYgc5uXsKsTmmvuvBy | 王惟恭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紹勍（CBDB 26283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26283&o=json)
- [中国历代人物传记资料库：王惟恭（CBDB 26282）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26282&o=json)
