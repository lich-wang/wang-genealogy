---
schema: wang-person/v1
id: p_TH8m84MvA8fiu9ubysTSGe
status: active
merged_into: null
display_name: 王順之
cbdb_id: 241289
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T5ZJ5T4C3GWioJsz12GgFv
        subject_person_id: p_TH8m84MvA8fiu9ubysTSGe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王順之，史料所见人物。本项目依据《中国历代人物传记资料库：王順之（CBDB 241289）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs__j7id_rs8vFGoKmo-Jn2ye
          claim_id: c_T5ZJ5T4C3GWioJsz12GgFv
          source_id: s_r2vaB9E7bv5FdvLRhEg6mz
          stance: supports
          locator: CBDB:241289
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_r2vaB9E7bv5FdvLRhEg6mz
            source_type: api_record
            title: 中国历代人物传记资料库：王順之（CBDB 241289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241289&o=json
            external_identifier: CBDB:241289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y51ZprFjiitHeRPSwEB4fy
        subject_person_id: p_TH8m84MvA8fiu9ubysTSGe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王順之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NCzJ9tx9YcMmBAeJQ7k3ip
          claim_id: c_Y51ZprFjiitHeRPSwEB4fy
          source_id: s_r2vaB9E7bv5FdvLRhEg6mz
          stance: supports
          locator: CBDB:241289
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
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
  descendants:
    - claim:
        id: c_WejALr38K6jDjTq2H9MWXX
        subject_person_id: p_TH8m84MvA8fiu9ubysTSGe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CwH6PHR1XzMwocJ8ZwHSPP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iPyzEA62XTc-m7yGBqcgAB
          claim_id: c_WejALr38K6jDjTq2H9MWXX
          source_id: s_6M4qEeJfDYH98dZB9CiF5G
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第七十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6M4qEeJfDYH98dZB9CiF5G
            source_type: api_record
            title: 中国历代人物传记资料库：王豪（CBDB 208164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208164&o=json
            external_identifier: CBDB:208164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CwH6PHR1XzMwocJ8ZwHSPP
        status: active
        display_name: 王豪
        merged_into_person_id: null
  other: []
---

# 王順之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王順之，史料所见人物。本项目依据《中国历代人物传记资料库：王順之（CBDB 241289）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王順之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_CwH6PHR1XzMwocJ8ZwHSPP | 王豪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王豪（CBDB 208164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208164&o=json)
- [中国历代人物传记资料库：王順之（CBDB 241289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241289&o=json)
