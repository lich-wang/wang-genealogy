---
schema: wang-person/v1
id: p_8TK2KeW5FhPrFwhE57ypLb
status: active
merged_into: null
display_name: 王琴堂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tkZHp5XRaomMBRnJi4QZPD
        subject_person_id: p_8TK2KeW5FhPrFwhE57ypLb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琴堂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HNLQ1nxj1kogRd62LpndKt
          claim_id: c_tkZHp5XRaomMBRnJi4QZPD
          source_id: s_9NbMt7zzQy99Kd4BmgMaMA
          stance: supports
          locator: CBDB:639417
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639417）
          source: &a1
            id: s_9NbMt7zzQy99Kd4BmgMaMA
            source_type: api_record
            title: 中国历代人物传记资料库：王琴堂（CBDB 639417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639417&o=json
            external_identifier: CBDB:639417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.917Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SLc4K8qGpDFR84E39LDM2E
        subject_person_id: p_8TK2KeW5FhPrFwhE57ypLb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7bhAD6ZpZ2G9ap9LXti9WF
          claim_id: c_SLc4K8qGpDFR84E39LDM2E
          source_id: s_9NbMt7zzQy99Kd4BmgMaMA
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
  ancestors: []
  descendants: []
  other: []
---

# 王琴堂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琴堂 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琴堂（CBDB 639417）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639417&o=json)
