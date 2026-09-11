---
schema: wang-person/v1
id: p_GF36QEVxtnF7cmZ1mJSNyH
status: active
merged_into: null
display_name: 王鑑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AHyfTxFcbpCJhiahZjzAPp
        subject_person_id: p_GF36QEVxtnF7cmZ1mJSNyH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r6R8kM5qGMziiB6V6WuhF1
          claim_id: c_AHyfTxFcbpCJhiahZjzAPp
          source_id: s_1hhu2BL6kQNMSrZouSbzSP
          stance: supports
          locator: CBDB:683696
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（683696）
          source: &a1
            id: s_1hhu2BL6kQNMSrZouSbzSP
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 683696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683696&o=json
            external_identifier: CBDB:683696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.303Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BekexWAdQtb1qRa69PpmdV
        subject_person_id: p_GF36QEVxtnF7cmZ1mJSNyH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑，清人物。籍贯歙縣，身份为為善鄉里、孝子/孝女，入仕郡庠生。（中国历代人物传记资料库 CBDB 683696）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DFPwdeYr-epsf6Qubj60oL
          claim_id: c_BekexWAdQtb1qRa69PpmdV
          source_id: s_1hhu2BL6kQNMSrZouSbzSP
          stance: supports
          locator: CBDB:683696
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kUZGVhyDsaRJ1j5XEbkRyJ
        subject_person_id: p_iMYUFMnpg225KFGLSDB3NQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GF36QEVxtnF7cmZ1mJSNyH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yl21eraQkS5WS9rA2NXwzq
          claim_id: c_kUZGVhyDsaRJ1j5XEbkRyJ
          source_id: s_1hhu2BL6kQNMSrZouSbzSP
          stance: supports
          locator: "民國歙縣志: 十六卷，lgid=1163886：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iMYUFMnpg225KFGLSDB3NQ
        status: active
        display_name: 王成埴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑑 | accepted |
| bio.summary | 王鑑，清人物。籍贯歙縣，身份为為善鄉里、孝子/孝女，入仕郡庠生。（中国历代人物传记资料库 CBDB 683696） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iMYUFMnpg225KFGLSDB3NQ | 王成埴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 683696）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683696&o=json)
