---
schema: wang-person/v1
id: p_wLmeXdPTK5DspfSqgEss4M
status: active
merged_into: null
display_name: 王必高
cbdb_id: 274037
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c9bTFiqmnexEdVrvQ2u1qB
        subject_person_id: p_wLmeXdPTK5DspfSqgEss4M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王必高，史料所见人物。本项目依据《中国历代人物传记资料库：王必高（CBDB 274037）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_5BQfKwNsDO4GhWuoL2-z7M
          claim_id: c_c9bTFiqmnexEdVrvQ2u1qB
          source_id: s_3qRj5bLr4mjQGTzym2Wty6
          stance: supports
          locator: CBDB:274037
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_3qRj5bLr4mjQGTzym2Wty6
            source_type: api_record
            title: 中国历代人物传记资料库：王必高（CBDB 274037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274037&o=json
            external_identifier: CBDB:274037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1KPcCWgdXx72CQGjpaxPU5
        subject_person_id: p_wLmeXdPTK5DspfSqgEss4M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王必高
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_W5kj7KGvFfQDDycEFMezr3
          claim_id: c_1KPcCWgdXx72CQGjpaxPU5
          source_id: s_3qRj5bLr4mjQGTzym2Wty6
          stance: supports
          locator: CBDB:274037
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
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
        id: c_sMw3DIBIh2GaVKL76jQd03
        subject_person_id: p_wLmeXdPTK5DspfSqgEss4M
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zypfM9LtT1QVxbd1JRHGna
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oMGNKKBTzm67WqkggPR2Rf
          claim_id: c_sMw3DIBIh2GaVKL76jQd03
          source_id: s_3qRj5bLr4mjQGTzym2Wty6
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第三十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3qRj5bLr4mjQGTzym2Wty6
            source_type: api_record
            title: 中国历代人物传记资料库：王必高（CBDB 274037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274037&o=json
            external_identifier: CBDB:274037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_zypfM9LtT1QVxbd1JRHGna
        status: active
        display_name: 王一麟
        merged_into_person_id: null
  other: []
---

# 王必高

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王必高，史料所见人物。本项目依据《中国历代人物传记资料库：王必高（CBDB 274037）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王必高 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_zypfM9LtT1QVxbd1JRHGna | 王一麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王必高（CBDB 274037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274037&o=json)
