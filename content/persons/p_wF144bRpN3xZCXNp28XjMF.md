---
schema: wang-person/v1
id: p_wF144bRpN3xZCXNp28XjMF
status: active
merged_into: null
display_name: 王公輔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6jbVCBkpqrpjinNUzbRSFP
        subject_person_id: p_wF144bRpN3xZCXNp28XjMF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZfY34HgXKfGAxVCQ5nrSxn
          claim_id: c_6jbVCBkpqrpjinNUzbRSFP
          source_id: s_AtJ1FGCCCyrMJ28foHxUbJ
          stance: supports
          locator: CBDB:38296
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38296）
          source: &a1
            id: s_AtJ1FGCCCyrMJ28foHxUbJ
            source_type: api_record
            title: 中国历代人物传记资料库：王公輔（CBDB 38296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38296&o=json
            external_identifier: CBDB:38296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XBmFxEcPyNpfzVDWqiLN2G
        subject_person_id: p_wF144bRpN3xZCXNp28XjMF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公輔，宋人物。籍贯儋州，身份为天文學家（星象家）。（中国历代人物传记资料库 CBDB 38296）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4MiBTm4D85OnLQ1WFSUoqT
          claim_id: c_XBmFxEcPyNpfzVDWqiLN2G
          source_id: s_AtJ1FGCCCyrMJ28foHxUbJ
          stance: supports
          locator: CBDB:38296
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

# 王公輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公輔 | accepted |
| bio.summary | 王公輔，宋人物。籍贯儋州，身份为天文學家（星象家）。（中国历代人物传记资料库 CBDB 38296） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王公輔（CBDB 38296）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38296&o=json)
