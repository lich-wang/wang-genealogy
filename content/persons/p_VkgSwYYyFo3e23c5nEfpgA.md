---
schema: wang-person/v1
id: p_VkgSwYYyFo3e23c5nEfpgA
status: active
merged_into: null
display_name: 王天民
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SigpxbBs6MMKxbG1wXvRjq
        subject_person_id: p_VkgSwYYyFo3e23c5nEfpgA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zy2BmRYexxHKUP2G9fj2NN
          claim_id: c_SigpxbBs6MMKxbG1wXvRjq
          source_id: s_DXGzk5BCwbZMkaag7qij3o
          stance: supports
          locator: CBDB:59939
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（59939）
          source: &a1
            id: s_DXGzk5BCwbZMkaag7qij3o
            source_type: api_record
            title: 中国历代人物传记资料库：王天民（CBDB 59939）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59939&o=json
            external_identifier: CBDB:59939
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.839Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cwEcqpVMXBFPf6wVtiRLMk
        subject_person_id: p_VkgSwYYyFo3e23c5nEfpgA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天民，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知州。（中国历代人物传记资料库 CBDB 59939）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KjC995FwXA6oVxLM-BSafb
          claim_id: c_cwEcqpVMXBFPf6wVtiRLMk
          source_id: s_DXGzk5BCwbZMkaag7qij3o
          stance: supports
          locator: CBDB:59939
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

# 王天民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天民 | accepted |
| bio.summary | 王天民，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知州。（中国历代人物传记资料库 CBDB 59939） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王天民（CBDB 59939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59939&o=json)
