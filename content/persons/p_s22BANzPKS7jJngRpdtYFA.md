---
schema: wang-person/v1
id: p_s22BANzPKS7jJngRpdtYFA
status: active
merged_into: null
display_name: 王遵
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZymtbFkwY5hn3bJWM4zimz
        subject_person_id: p_s22BANzPKS7jJngRpdtYFA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i4KEVGE4Pd6ZL38CTYFXn9
          claim_id: c_ZymtbFkwY5hn3bJWM4zimz
          source_id: s_Z9V6eCqppaJk8NfGKE7JJW
          stance: supports
          locator: CBDB:158638
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（158638）
          source: &a1
            id: s_Z9V6eCqppaJk8NfGKE7JJW
            source_type: api_record
            title: 中国历代人物传记资料库：王遵（CBDB 158638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158638&o=json
            external_identifier: CBDB:158638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.927Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cPkiPaQto8nGq2BntBx7sd
        subject_person_id: p_s22BANzPKS7jJngRpdtYFA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 158638）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i-TjsaoaETCdQ8F5GrVrmc
          claim_id: c_cPkiPaQto8nGq2BntBx7sd
          source_id: s_Z9V6eCqppaJk8NfGKE7JJW
          stance: supports
          locator: CBDB:158638
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_afdIvry7rmYS2r4B-0R7uf
        subject_person_id: p_qCDtQiLmeEnX8dr3rpqXVC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s22BANzPKS7jJngRpdtYFA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CieW-Sa_ssGiHHJ7ba8XO6
          claim_id: c_afdIvry7rmYS2r4B-0R7uf
          source_id: s_Z9V6eCqppaJk8NfGKE7JJW
          stance: supports
          locator: 唐代墓誌匯編:二卷，Huichang 17：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qCDtQiLmeEnX8dr3rpqXVC
        status: active
        display_name: 王頊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王遵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遵 | accepted |
| bio.summary | 王遵，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 158638） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qCDtQiLmeEnX8dr3rpqXVC | 王頊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遵（CBDB 158638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158638&o=json)
