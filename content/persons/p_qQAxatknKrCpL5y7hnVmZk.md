---
schema: wang-person/v1
id: p_qQAxatknKrCpL5y7hnVmZk
status: active
merged_into: null
display_name: 王明悟
cbdb_id: 155944
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h1f54pq2rwTZCrh2d5nUp5
        subject_person_id: p_qQAxatknKrCpL5y7hnVmZk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明悟，史料所见人物。本项目依据《中国历代人物传记资料库：王明悟（CBDB 155944）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_v4gNkMHlPVQbFejNwjQkVC
          claim_id: c_h1f54pq2rwTZCrh2d5nUp5
          source_id: s_GheAPjd9YEQub5VAthNXi5
          stance: supports
          locator: CBDB:155944
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_GheAPjd9YEQub5VAthNXi5
            source_type: api_record
            title: 中国历代人物传记资料库：王明悟（CBDB 155944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155944&o=json
            external_identifier: CBDB:155944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_M7SJBMAc67QyMZfiRQCR1J
        subject_person_id: p_qQAxatknKrCpL5y7hnVmZk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明悟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_uRt26cHd2RfmHt44V7dc31
          claim_id: c_M7SJBMAc67QyMZfiRQCR1J
          source_id: s_GheAPjd9YEQub5VAthNXi5
          stance: supports
          locator: CBDB:155944
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_c7EkRUYqhe3MuEHMdtyX0h
        subject_person_id: p_738t8jZyTZKAPviDCRrrJx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qQAxatknKrCpL5y7hnVmZk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J47gp-eHkdMzsqK0urBoGF
          claim_id: c_c7EkRUYqhe3MuEHMdtyX0h
          source_id: s_GheAPjd9YEQub5VAthNXi5
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 98：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GheAPjd9YEQub5VAthNXi5
            source_type: api_record
            title: 中国历代人物传记资料库：王明悟（CBDB 155944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155944&o=json
            external_identifier: CBDB:155944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_738t8jZyTZKAPviDCRrrJx
        status: active
        display_name: 王平
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王明悟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王明悟，史料所见人物。本项目依据《中国历代人物传记资料库：王明悟（CBDB 155944）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王明悟 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_738t8jZyTZKAPviDCRrrJx | 王平 | accepted |

## 外部来源

- [中国历代人物传记资料库：王明悟（CBDB 155944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155944&o=json)
