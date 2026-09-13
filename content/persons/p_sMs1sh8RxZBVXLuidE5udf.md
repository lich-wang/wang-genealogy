---
schema: wang-person/v1
id: p_sMs1sh8RxZBVXLuidE5udf
status: active
merged_into: null
display_name: 王仁僓
cbdb_id: 25240
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zNwjiWaud97mW2dYAhJrG9
        subject_person_id: p_sMs1sh8RxZBVXLuidE5udf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁僓，史料所见人物。本项目依据《中国历代人物传记资料库：王仁僓（CBDB 25240）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_qHw1gXr28Jr3l2QuY_3F6r
          claim_id: c_zNwjiWaud97mW2dYAhJrG9
          source_id: s_F66WvhBGcciQ16hP3aprHD
          stance: supports
          locator: CBDB:25240
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_F66WvhBGcciQ16hP3aprHD
            source_type: api_record
            title: 中国历代人物传记资料库：王仁僓（CBDB 25240）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25240&o=json
            external_identifier: CBDB:25240
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3A5TyNgdcfUoMSguAXnGJN
        subject_person_id: p_sMs1sh8RxZBVXLuidE5udf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁僓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ey6S4rtkkrWj61NosurDuC
          claim_id: c_3A5TyNgdcfUoMSguAXnGJN
          source_id: s_F66WvhBGcciQ16hP3aprHD
          stance: supports
          locator: CBDB:25240
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 閩國
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_q2z7KsnLzTsAaobauJU14w
        subject_person_id: p_LaN7hTgUoNQbyqGUidTS8A
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sMs1sh8RxZBVXLuidE5udf
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4DI_4IF5lLG7id4RHNxZwh
          claim_id: c_q2z7KsnLzTsAaobauJU14w
          source_id: s_JwrEyYHCGpeHiZo3p14aPu
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王仁僓 ⇄ 曾祖 王棨）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_JwrEyYHCGpeHiZo3p14aPu
            source_type: api_record
            title: 中国历代人物传记资料库：王棨（CBDB 4204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=4204&o=json
            external_identifier: CBDB:4204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.461Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LaN7hTgUoNQbyqGUidTS8A
        status: active
        display_name: 王棨
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_JNB5xtcGlZVMmSRycNJb6F
        subject_person_id: p_sMs1sh8RxZBVXLuidE5udf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_N4m8f1CJyyaPfxmbQEmr7X
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gGjC_zEd5zHtOyySbb84Qr
          claim_id: c_JNB5xtcGlZVMmSRycNJb6F
          source_id: s_hdxe6Kg5j4msZ4hWo3Tojh
          stance: supports
          locator: CBDB 双向互证（祖父 王仁僓 ⇄ 孫 王珣）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_hdxe6Kg5j4msZ4hWo3Tojh
            source_type: api_record
            title: 中国历代人物传记资料库：王珣（CBDB 10335）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10335&o=json
            external_identifier: CBDB:10335
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.526Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_N4m8f1CJyyaPfxmbQEmr7X
        status: active
        display_name: 王珣
        merged_into_person_id: null
  other: []
---

# 王仁僓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仁僓，史料所见人物。本项目依据《中国历代人物传记资料库：王仁僓（CBDB 25240）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王仁僓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_LaN7hTgUoNQbyqGUidTS8A | 王棨 | accepted |
| descendants | p_N4m8f1CJyyaPfxmbQEmr7X | 王珣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王棨（CBDB 4204）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=4204&o=json)
- [中国历代人物传记资料库：王仁僓（CBDB 25240）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25240&o=json)
- [中国历代人物传记资料库：王珣（CBDB 10335）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10335&o=json)
