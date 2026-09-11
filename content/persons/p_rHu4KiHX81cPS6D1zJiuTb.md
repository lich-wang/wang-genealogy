---
schema: wang-person/v1
id: p_rHu4KiHX81cPS6D1zJiuTb
status: active
merged_into: null
display_name: 王友直
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w4tbBKuNxRrx8ucSsCiJJs
        subject_person_id: p_rHu4KiHX81cPS6D1zJiuTb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友直
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NH1b2MHcKX96vvnpDPAbbj
          claim_id: c_w4tbBKuNxRrx8ucSsCiJJs
          source_id: s_98VRicjpogoXUKQ7r1DD41
          stance: supports
          locator: CBDB:686993
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（686993）
          source: &a1
            id: s_98VRicjpogoXUKQ7r1DD41
            source_type: api_record
            title: 中国历代人物传记资料库：王友直（CBDB 686993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686993&o=json
            external_identifier: CBDB:686993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.407Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DE43NP778NEJrWbLp5Gu9Z
        subject_person_id: p_rHu4KiHX81cPS6D1zJiuTb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友直，宋人物。籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 686993）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SKTXl_ZEzwiOB22J9NX00N
          claim_id: c_DE43NP778NEJrWbLp5Gu9Z
          source_id: s_98VRicjpogoXUKQ7r1DD41
          stance: supports
          locator: CBDB:686993
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王友直

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友直 | accepted |
| bio.summary | 王友直，宋人物。籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 686993） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王友直（CBDB 686993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686993&o=json)
