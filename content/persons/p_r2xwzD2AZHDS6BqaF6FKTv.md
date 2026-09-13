---
schema: wang-person/v1
id: p_r2xwzD2AZHDS6BqaF6FKTv
status: active
merged_into: null
display_name: 王沇之
cbdb_id: 26614
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bacN8MzuuziCFfS882gN5H
        subject_person_id: p_r2xwzD2AZHDS6BqaF6FKTv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沇之，史料所见人物。本项目依据《中国历代人物传记资料库：王沇之（CBDB 26614）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_gkj2vXOK7uZ4QWoxfYU0ip
          claim_id: c_bacN8MzuuziCFfS882gN5H
          source_id: s_mQuNok4ZtXGV3bRir4QYT7
          stance: supports
          locator: CBDB:26614
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_mQuNok4ZtXGV3bRir4QYT7
            source_type: api_record
            title: 中国历代人物传记资料库：王沇之（CBDB 26614）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26614&o=json
            external_identifier: CBDB:26614
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QWdKCTK5m6QhCL9JSqcy4E
        subject_person_id: p_r2xwzD2AZHDS6BqaF6FKTv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沇之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_M3aY4NNuQX2cExSvAHnvQU
          claim_id: c_QWdKCTK5m6QhCL9JSqcy4E
          source_id: s_mQuNok4ZtXGV3bRir4QYT7
          stance: supports
          locator: CBDB:26614
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9tfJDfttxSkljDNv2wMkuk
        subject_person_id: p_BxVQChzbJa8u9Vm5XHoDpw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r2xwzD2AZHDS6BqaF6FKTv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2elsGdkSdpRAajfuon1Dcq
          claim_id: c_9tfJDfttxSkljDNv2wMkuk
          source_id: s_7zo4774w8QAmSiH1s1VitC
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1600：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7zo4774w8QAmSiH1s1VitC
            source_type: api_record
            title: 中国历代人物传记资料库：王介（CBDB 26610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26610&o=json
            external_identifier: CBDB:26610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BxVQChzbJa8u9Vm5XHoDpw
        status: active
        display_name: 王介
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王沇之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王沇之，史料所见人物。本项目依据《中国历代人物传记资料库：王沇之（CBDB 26614）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王沇之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BxVQChzbJa8u9Vm5XHoDpw | 王介 | accepted |

## 外部来源

- [中国历代人物传记资料库：王介（CBDB 26610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26610&o=json)
- [中国历代人物传记资料库：王沇之（CBDB 26614）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26614&o=json)
