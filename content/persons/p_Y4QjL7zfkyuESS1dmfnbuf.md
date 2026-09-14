---
schema: wang-person/v1
id: p_Y4QjL7zfkyuESS1dmfnbuf
status: active
merged_into: null
display_name: 王三策
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vc48McjeTi5Bg85Gb9Pgci
        subject_person_id: p_Y4QjL7zfkyuESS1dmfnbuf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三策
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nF3MEeaGcXAUqrf3gnzvxX
          claim_id: c_vc48McjeTi5Bg85Gb9Pgci
          source_id: s_aCiyNVBdMoQ62DayMREteH
          stance: supports
          locator: CBDB:214236
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214236）
          source: &a1
            id: s_aCiyNVBdMoQ62DayMREteH
            source_type: api_record
            title: 中国历代人物传记资料库：王三策（CBDB 214236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214236&o=json
            external_identifier: CBDB:214236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.151Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BqGoAbVPuNE7HpCNF6TAL4
        subject_person_id: p_Y4QjL7zfkyuESS1dmfnbuf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三策，明人物。萬曆二年進士，籍贯汲縣。（中国历代人物传记资料库 CBDB 214236）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C0TUAWp8ZKYyWjq1qJ_4AV
          claim_id: c_BqGoAbVPuNE7HpCNF6TAL4
          source_id: s_aCiyNVBdMoQ62DayMREteH
          stance: supports
          locator: CBDB:214236
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_V7ATGAv5DhVz0VD5bAFdTU
        subject_person_id: p_1FBPum8LTBdeJMCSbLMi71
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Y4QjL7zfkyuESS1dmfnbuf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yZi-XcXbIAU_gBNDexypVd
          claim_id: c_V7ATGAv5DhVz0VD5bAFdTU
          source_id: s__BRueCvkxmqtvmfal7RpDv
          stance: supports
          locator: CBDB：兄弟 王三宅（126449）之父／母 王曰可
          quotation: null
          interpretation_note: 由兄弟关系推断：王三策 与 王三宅 为同胞（CBDB 记「兄」），王三宅 之父／母即 王三策 之父／母。
          source:
            id: s__BRueCvkxmqtvmfal7RpDv
            source_type: api_record
            title: 中国历代人物传记资料库：王三策（CBDB 214236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214236&o=json
            external_identifier: CBDB:214236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1FBPum8LTBdeJMCSbLMi71
        status: active
        display_name: 王曰可
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_f8tKEZ8MD3NPEjjGIwO5xM
        subject_person_id: p_Y4QjL7zfkyuESS1dmfnbuf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gQ7de4k3fPsZaTDKaE81D5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_74N_RRUmfWaCCvtUAhPfvy
          claim_id: c_f8tKEZ8MD3NPEjjGIwO5xM
          source_id: s__BRueCvkxmqtvmfal7RpDv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126449 王三宅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__BRueCvkxmqtvmfal7RpDv
            source_type: api_record
            title: 中国历代人物传记资料库：王三策（CBDB 214236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214236&o=json
            external_identifier: CBDB:214236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gQ7de4k3fPsZaTDKaE81D5
        status: active
        display_name: 王三宅
        merged_into_person_id: null
---

# 王三策

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三策 | accepted |
| bio.summary | 王三策，明人物。萬曆二年進士，籍贯汲縣。（中国历代人物传记资料库 CBDB 214236） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1FBPum8LTBdeJMCSbLMi71 | 王曰可 | accepted |
| other | p_gQ7de4k3fPsZaTDKaE81D5 | 王三宅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三策（CBDB 214236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214236&o=json)
