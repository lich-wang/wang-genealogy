---
schema: wang-person/v1
id: p_6HE2Vnx2kQN6VTT2PM1HFt
status: active
merged_into: null
display_name: 王璘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kDNpsKuAubHAR9MPXk7Cb1
        subject_person_id: p_6HE2Vnx2kQN6VTT2PM1HFt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3s3PtPiJ9WtcL7s2VXSx4s
          claim_id: c_kDNpsKuAubHAR9MPXk7Cb1
          source_id: s_H2Ww3Vou8Xv96hQfHRsS4s
          stance: supports
          locator: CBDB:92119
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92119）
          source: &a1
            id: s_H2Ww3Vou8Xv96hQfHRsS4s
            source_type: api_record
            title: 中国历代人物传记资料库：王璘（CBDB 92119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92119&o=json
            external_identifier: CBDB:92119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.141Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CtVqL1Mrt5yp7C6SicKE7M
        subject_person_id: p_6HE2Vnx2kQN6VTT2PM1HFt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王璘，唐人物。身份为詩人，入仕科舉制舉: 萬言科。（中国历代人物传记资料库 CBDB 92119）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Kyna77ADlCApOVBMmU3oJM
          claim_id: c_CtVqL1Mrt5yp7C6SicKE7M
          source_id: s_H2Ww3Vou8Xv96hQfHRsS4s
          stance: supports
          locator: CBDB:92119
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

# 王璘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璘 | accepted |
| bio.summary | 王璘，唐人物。身份为詩人，入仕科舉制舉: 萬言科。（中国历代人物传记资料库 CBDB 92119） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璘（CBDB 92119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92119&o=json)
