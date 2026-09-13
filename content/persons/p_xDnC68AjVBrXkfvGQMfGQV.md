---
schema: wang-person/v1
id: p_xDnC68AjVBrXkfvGQMfGQV
status: active
merged_into: null
display_name: 王國衡
cbdb_id: 226717
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dQPFLacDAPhQHPnxDVWmcS
        subject_person_id: p_xDnC68AjVBrXkfvGQMfGQV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國衡，明人物。萬曆丙戌科進士進士，籍贯武進。（中国历代人物传记资料库 CBDB 226717）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Eke5InHLc0Bi7qBCk_g915
          claim_id: c_dQPFLacDAPhQHPnxDVWmcS
          source_id: s_n88Hy15MeaBzJ1aDdyKbXM
          stance: supports
          locator: CBDB:226717
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_n88Hy15MeaBzJ1aDdyKbXM
            source_type: api_record
            title: 中国历代人物传记资料库：王國衡（CBDB 226717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226717&o=json
            external_identifier: CBDB:226717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fD1SEa2SYrDqita8dN24Q2
        subject_person_id: p_xDnC68AjVBrXkfvGQMfGQV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國衡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CHGMCQiXrrHYvTuQuHNTRE
          claim_id: c_fD1SEa2SYrDqita8dN24Q2
          source_id: s_n88Hy15MeaBzJ1aDdyKbXM
          stance: supports
          locator: CBDB:226717
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5F6W1Wwt2BRSxJFS0758hy
        subject_person_id: p_Wgw4bGM6hG66ToMF6agV3N
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xDnC68AjVBrXkfvGQMfGQV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bOMdISUpfpW33CyJe87IUW
          claim_id: c_5F6W1Wwt2BRSxJFS0758hy
          source_id: s_n88Hy15MeaBzJ1aDdyKbXM
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第六十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_n88Hy15MeaBzJ1aDdyKbXM
            source_type: api_record
            title: 中国历代人物传记资料库：王國衡（CBDB 226717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226717&o=json
            external_identifier: CBDB:226717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Wgw4bGM6hG66ToMF6agV3N
        status: active
        display_name: 王就學
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王國衡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王國衡，明人物。萬曆丙戌科進士進士，籍贯武進。（中国历代人物传记资料库 CBDB 226717） | accepted |
| name.primary | 王國衡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Wgw4bGM6hG66ToMF6agV3N | 王就學 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國衡（CBDB 226717）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226717&o=json)
