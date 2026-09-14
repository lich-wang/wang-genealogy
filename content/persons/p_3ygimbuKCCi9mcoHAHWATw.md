---
schema: wang-person/v1
id: p_3ygimbuKCCi9mcoHAHWATw
status: active
merged_into: null
display_name: 王詩
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MkH9GJ687trKS1CaHRpNHM
        subject_person_id: p_3ygimbuKCCi9mcoHAHWATw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RL1WHPBgdYY3WPvhCX5Wnb
          claim_id: c_MkH9GJ687trKS1CaHRpNHM
          source_id: s_j1LRyv1sd37ZTAyjmbQ9RK
          stance: supports
          locator: CBDB:332115
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（332115）
          source: &a1
            id: s_j1LRyv1sd37ZTAyjmbQ9RK
            source_type: api_record
            title: 中国历代人物传记资料库：王詩（CBDB 332115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332115&o=json
            external_identifier: CBDB:332115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.380Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dZGY2HQA9LJKMgnTkJgRNZ
        subject_person_id: p_3ygimbuKCCi9mcoHAHWATw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詩，明人物。嘉靖四十四年進士，籍贯什邡。（中国历代人物传记资料库 CBDB 332115）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZAZ8tSdUNCU2LFVR15sBzZ
          claim_id: c_dZGY2HQA9LJKMgnTkJgRNZ
          source_id: s_j1LRyv1sd37ZTAyjmbQ9RK
          stance: supports
          locator: CBDB:332115
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HJHfRT1ngDtPe0GJePzfAS
        subject_person_id: p_qqsY6t9Q8faV4F4CdLeZ5T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3ygimbuKCCi9mcoHAHWATw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FCMCi5o6ZSqzCgzN_ogdvn
          claim_id: c_HJHfRT1ngDtPe0GJePzfAS
          source_id: s_LH8sek9tNQA8KHthkDhFGn
          stance: supports
          locator: CBDB：兄弟 王謠（205360）之父／母 王本堅
          quotation: null
          interpretation_note: 由兄弟关系推断：王詩 与 王謠 为同胞（CBDB 记「兄」），王謠 之父／母即 王詩 之父／母。
          source:
            id: s_LH8sek9tNQA8KHthkDhFGn
            source_type: api_record
            title: 中国历代人物传记资料库：王詩（CBDB 332115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332115&o=json
            external_identifier: CBDB:332115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qqsY6t9Q8faV4F4CdLeZ5T
        status: active
        display_name: 王本堅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Y9isMSH0A4JlsSL3HyJ5t8
        subject_person_id: p_3ygimbuKCCi9mcoHAHWATw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UMUkjo8ahM3AKur1S9jMgA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_14Kez2OhRR5GN48qCJ0MUL
          claim_id: c_Y9isMSH0A4JlsSL3HyJ5t8
          source_id: s_LH8sek9tNQA8KHthkDhFGn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205360 王謠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LH8sek9tNQA8KHthkDhFGn
            source_type: api_record
            title: 中国历代人物传记资料库：王詩（CBDB 332115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332115&o=json
            external_identifier: CBDB:332115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UMUkjo8ahM3AKur1S9jMgA
        status: active
        display_name: 王謠
        merged_into_person_id: null
---

# 王詩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詩 | accepted |
| bio.summary | 王詩，明人物。嘉靖四十四年進士，籍贯什邡。（中国历代人物传记资料库 CBDB 332115） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qqsY6t9Q8faV4F4CdLeZ5T | 王本堅 | accepted |
| other | p_UMUkjo8ahM3AKur1S9jMgA | 王謠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王詩（CBDB 332115）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332115&o=json)
