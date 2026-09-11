---
schema: wang-person/v1
id: p_NXxbPAGfW2NxRmG2DVsB19
status: active
merged_into: null
display_name: 王進之
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dy2oRdPAkCxdGCQqs8UZyY
        subject_person_id: p_NXxbPAGfW2NxRmG2DVsB19
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JjF3ehiY2t8dftsNWqAWD3
          claim_id: c_dy2oRdPAkCxdGCQqs8UZyY
          source_id: s_EFXcjYB6YhAoCA5cPcGWyb
          stance: supports
          locator: CBDB:38151
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38151）
          source: &a1
            id: s_EFXcjYB6YhAoCA5cPcGWyb
            source_type: api_record
            title: 中国历代人物传记资料库：王進之（CBDB 38151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38151&o=json
            external_identifier: CBDB:38151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.375Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dsbzRKwsvGPAKjvXZPGB4p
        subject_person_id: p_NXxbPAGfW2NxRmG2DVsB19
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進之，宋人物。籍贯泉州，曾任朝散大夫、朝議大夫。（中国历代人物传记资料库 CBDB 38151）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IOibvhyYHguZFfm4YqxDGi
          claim_id: c_dsbzRKwsvGPAKjvXZPGB4p
          source_id: s_EFXcjYB6YhAoCA5cPcGWyb
          stance: supports
          locator: CBDB:38151
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_rh5KUCCnRXKInUm3LgXtrC
        subject_person_id: p_NXxbPAGfW2NxRmG2DVsB19
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eu5g7G8CQcFREB28ygRGvL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iINh6bRyZWqV-l_N72JkS4
          claim_id: c_rh5KUCCnRXKInUm3LgXtrC
          source_id: s_v24YJorKXm98KFQqZd8fVH
          stance: supports
          locator: 宋人傳記資料索引(電子版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v24YJorKXm98KFQqZd8fVH
            source_type: api_record
            title: 中国历代人物传记资料库：王自成（CBDB 38828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38828&o=json
            external_identifier: CBDB:38828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.561Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eu5g7G8CQcFREB28ygRGvL
        status: active
        display_name: 王自成
        merged_into_person_id: null
    - claim:
        id: c_foguk8_LMK9XrJAWM_JM4-
        subject_person_id: p_NXxbPAGfW2NxRmG2DVsB19
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hju8g8DfnbpLBKG57vqtHW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qtgs2ZmRsFDfqX2jY24kS_
          claim_id: c_foguk8_LMK9XrJAWM_JM4-
          source_id: s_4M9zoScMkHGZHFDryHBLa2
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1943：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4M9zoScMkHGZHFDryHBLa2
            source_type: api_record
            title: 中国历代人物传记资料库：王必成（CBDB 38152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38152&o=json
            external_identifier: CBDB:38152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.376Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Hju8g8DfnbpLBKG57vqtHW
        status: active
        display_name: 王必成
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王進之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王進之 | accepted |
| bio.summary | 王進之，宋人物。籍贯泉州，曾任朝散大夫、朝議大夫。（中国历代人物传记资料库 CBDB 38151） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_eu5g7G8CQcFREB28ygRGvL | 王自成 | accepted |
| children | p_Hju8g8DfnbpLBKG57vqtHW | 王必成 | accepted |

## 外部来源

- [中国历代人物传记资料库：王必成（CBDB 38152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38152&o=json)
- [中国历代人物传记资料库：王進之（CBDB 38151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38151&o=json)
- [中国历代人物传记资料库：王自成（CBDB 38828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38828&o=json)
