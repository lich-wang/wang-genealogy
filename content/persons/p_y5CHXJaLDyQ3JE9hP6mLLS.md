---
schema: wang-person/v1
id: p_y5CHXJaLDyQ3JE9hP6mLLS
status: active
merged_into: null
display_name: 王臻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nL7bLtVXfAnFcvuUhb1bwu
        subject_person_id: p_y5CHXJaLDyQ3JE9hP6mLLS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ApBba8jiokL9pnZ1P8VyNX
          claim_id: c_nL7bLtVXfAnFcvuUhb1bwu
          source_id: s_zAh5YwDvQNFQ5CPZvMJLiV
          stance: supports
          locator: CBDB:1775
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1775）
          source: &a1
            id: s_zAh5YwDvQNFQ5CPZvMJLiV
            source_type: api_record
            title: 中国历代人物传记资料库：王臻（CBDB 1775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1775&o=json
            external_identifier: CBDB:1775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.233Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7v4LvGR87Kp1FLMAWGHmum
        subject_person_id: p_y5CHXJaLDyQ3JE9hP6mLLS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臻，宋人物。籍贯汝陰，入仕進士，曾任提舉在京諸司、監察御史、殿中侍御史。（中国历代人物传记资料库 CBDB 1775）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dgiQYY_twPBmpUfKHfBwrf
          claim_id: c_7v4LvGR87Kp1FLMAWGHmum
          source_id: s_zAh5YwDvQNFQ5CPZvMJLiV
          stance: supports
          locator: CBDB:1775
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

# 王臻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臻 | accepted |
| bio.summary | 王臻，宋人物。籍贯汝陰，入仕進士，曾任提舉在京諸司、監察御史、殿中侍御史。（中国历代人物传记资料库 CBDB 1775） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王臻（CBDB 1775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1775&o=json)
