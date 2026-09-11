---
schema: wang-person/v1
id: p_cZE8zfM6oQN4r6dSAfrgZq
status: active
merged_into: null
display_name: 王正猷
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZYu5Qk6LvoWHYh2VTQrH2k
        subject_person_id: p_cZE8zfM6oQN4r6dSAfrgZq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正猷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NZnJaTMx1Lw3KKqxL8NkEY
          claim_id: c_ZYu5Qk6LvoWHYh2VTQrH2k
          source_id: s_7JmUwHFbLN4yC1dESuS2qd
          stance: supports
          locator: CBDB:690115
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690115）
          source: &a1
            id: s_7JmUwHFbLN4yC1dESuS2qd
            source_type: api_record
            title: 中国历代人物传记资料库：王正猷（CBDB 690115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690115&o=json
            external_identifier: CBDB:690115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PRwqhoAa4yr2P6fYL9KUFo
        subject_person_id: p_cZE8zfM6oQN4r6dSAfrgZq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xvKe3wXAjGGccd4a5XJrVu
          claim_id: c_PRwqhoAa4yr2P6fYL9KUFo
          source_id: s_7JmUwHFbLN4yC1dESuS2qd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_22BzDokw3MU9YGwxGWXM0p
        subject_person_id: p_5HLAwt21hgN7UKGzKG2BNZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cZE8zfM6oQN4r6dSAfrgZq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LqMNPEKhzcHGizcTfiIWtk
          claim_id: c_22BzDokw3MU9YGwxGWXM0p
          source_id: s_VQ1w5GCNNwxFizLZSJC9Ld
          stance: supports
          locator: CBDB 双向互证（孫 王正猷 ⇄ 祖父 王璘）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_VQ1w5GCNNwxFizLZSJC9Ld
            source_type: api_record
            title: 中国历代人物传记资料库：王璘（CBDB 22213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22213&o=json
            external_identifier: CBDB:22213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.848Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5HLAwt21hgN7UKGzKG2BNZ
        status: active
        display_name: 王璘
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王正猷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正猷 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_5HLAwt21hgN7UKGzKG2BNZ | 王璘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璘（CBDB 22213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22213&o=json)
- [中国历代人物传记资料库：王正猷（CBDB 690115）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690115&o=json)
