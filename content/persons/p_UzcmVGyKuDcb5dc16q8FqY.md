---
schema: wang-person/v1
id: p_UzcmVGyKuDcb5dc16q8FqY
status: active
merged_into: null
display_name: 王書
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aH84JHL8ah4JQrGvNAFQxo
        subject_person_id: p_UzcmVGyKuDcb5dc16q8FqY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王書
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c11FETLf3jc2WqccqHF1tz
          claim_id: c_aH84JHL8ah4JQrGvNAFQxo
          source_id: s_2WNdyQQM8zmwHU1HD72vAo
          stance: supports
          locator: CBDB:490907
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（490907）
          source: &a1
            id: s_2WNdyQQM8zmwHU1HD72vAo
            source_type: api_record
            title: 中国历代人物传记资料库：王書（CBDB 490907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490907&o=json
            external_identifier: CBDB:490907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.150Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G1JMXSt6579z96k1KWe1Ps
        subject_person_id: p_UzcmVGyKuDcb5dc16q8FqY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王書，清人物。入仕監生: 蔭監(含明代官生、恩生，或清代恩廕生、難廕生)，曾任知州。（中国历代人物传记资料库 CBDB 490907）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4bTI1PkzYK3-WAiB2HNpfP
          claim_id: c_G1JMXSt6579z96k1KWe1Ps
          source_id: s_2WNdyQQM8zmwHU1HD72vAo
          stance: supports
          locator: CBDB:490907
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

# 王書

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王書 | accepted |
| bio.summary | 王書，清人物。入仕監生: 蔭監(含明代官生、恩生，或清代恩廕生、難廕生)，曾任知州。（中国历代人物传记资料库 CBDB 490907） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王書（CBDB 490907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490907&o=json)
