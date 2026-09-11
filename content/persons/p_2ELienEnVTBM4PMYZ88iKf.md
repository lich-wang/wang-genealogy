---
schema: wang-person/v1
id: p_2ELienEnVTBM4PMYZ88iKf
status: active
merged_into: null
display_name: 王笋
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yXvkVuuP9cFYw9hup6fPD1
        subject_person_id: p_2ELienEnVTBM4PMYZ88iKf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王笋
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uKLtptNbpV7NL49dgpKFRd
          claim_id: c_yXvkVuuP9cFYw9hup6fPD1
          source_id: s_nhkV9UiBrd47m56dEpLKN6
          stance: supports
          locator: CBDB:190168
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190168）
          source: &a1
            id: s_nhkV9UiBrd47m56dEpLKN6
            source_type: api_record
            title: 中国历代人物传记资料库：王笋（CBDB 190168）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190168&o=json
            external_identifier: CBDB:190168
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.278Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DhmsvJaefdrkK3U6L8thCU
        subject_person_id: p_2ELienEnVTBM4PMYZ88iKf
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 985年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cUvKqQBjfpp5pg1hWEbD7x
          claim_id: c_DhmsvJaefdrkK3U6L8thCU
          source_id: s_nhkV9UiBrd47m56dEpLKN6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9ou2pAUTNf9R6kDH8nDeEh
        subject_person_id: p_2ELienEnVTBM4PMYZ88iKf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为五代人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hjZA6Bn2Wegb8ddofCjfoA
          claim_id: c_9ou2pAUTNf9R6kDH8nDeEh
          source_id: s_nhkV9UiBrd47m56dEpLKN6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_R0Nd2PNLO4RSrdNkruSfam
        subject_person_id: p_SsZbQkb7Wa4KQYF6cCGrRS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2ELienEnVTBM4PMYZ88iKf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xMR5OYLJ2hdnz-eKYlEfpb
          claim_id: c_R0Nd2PNLO4RSrdNkruSfam
          source_id: s_nhkV9UiBrd47m56dEpLKN6
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SsZbQkb7Wa4KQYF6cCGrRS
        status: active
        display_name: 王鶚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王笋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王笋 | accepted |
| death.date | 985年 | accepted |
| bio.summary | CBDB 记载为五代人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SsZbQkb7Wa4KQYF6cCGrRS | 王鶚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王笋（CBDB 190168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190168&o=json)
