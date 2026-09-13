---
schema: wang-person/v1
id: p_yE8jyFvK41t2tC3V3Q5knu
status: active
merged_into: null
display_name: 王曰銓
cbdb_id: 222717
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L2K5bsESogo5uAeLZqjHFk
        subject_person_id: p_yE8jyFvK41t2tC3V3Q5knu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰銓，明人物。萬曆十一年進士，籍贯開州。（中国历代人物传记资料库 CBDB 222717）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Tg_DNH0IGyKJ6SasvTJdv_
          claim_id: c_L2K5bsESogo5uAeLZqjHFk
          source_id: s_CdS4etMG5o9tKGLXE2AUo9
          stance: supports
          locator: CBDB:222717
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_CdS4etMG5o9tKGLXE2AUo9
            source_type: api_record
            title: 中国历代人物传记资料库：王曰銓（CBDB 222717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222717&o=json
            external_identifier: CBDB:222717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NWWKiwrQeicf3KL9ioUnZD
        subject_person_id: p_yE8jyFvK41t2tC3V3Q5knu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰銓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Hr5RU3fD4CAJjbq9gE6nqp
          claim_id: c_NWWKiwrQeicf3KL9ioUnZD
          source_id: s_CdS4etMG5o9tKGLXE2AUo9
          stance: supports
          locator: CBDB:222717
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_YYikT-RQrYjqZBIm7JLXia
        subject_person_id: p_yE8jyFvK41t2tC3V3Q5knu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dS2fybT134JWfvQgxwSUXh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cWgluumXMAbPqRXljmgJdT
          claim_id: c_YYikT-RQrYjqZBIm7JLXia
          source_id: s_CdS4etMG5o9tKGLXE2AUo9
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第五十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CdS4etMG5o9tKGLXE2AUo9
            source_type: api_record
            title: 中国历代人物传记资料库：王曰銓（CBDB 222717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222717&o=json
            external_identifier: CBDB:222717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_dS2fybT134JWfvQgxwSUXh
        status: active
        display_name: 王祺
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王曰銓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王曰銓，明人物。萬曆十一年進士，籍贯開州。（中国历代人物传记资料库 CBDB 222717） | accepted |
| name.primary | 王曰銓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dS2fybT134JWfvQgxwSUXh | 王祺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王曰銓（CBDB 222717）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222717&o=json)
