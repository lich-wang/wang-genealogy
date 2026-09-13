---
schema: wang-person/v1
id: p_o9Ly7NXgeJLDgSWHFeZMoM
status: active
merged_into: null
display_name: 王元欽
cbdb_id: 140941
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_26xvn4FmQ24APh2V4SxkKe
        subject_person_id: p_o9Ly7NXgeJLDgSWHFeZMoM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元欽（卒于746年），唐人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 140941）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_N9NDyPu38x_kXQq_IFLSd2
          claim_id: c_26xvn4FmQ24APh2V4SxkKe
          source_id: s_g5xMZHmRNCerARfRYUuVsy
          stance: supports
          locator: CBDB:140941
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_g5xMZHmRNCerARfRYUuVsy
            source_type: api_record
            title: 中国历代人物传记资料库：王元欽（CBDB 140941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140941&o=json
            external_identifier: CBDB:140941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_hXGR5a2XnSHarpnAqDfeRV
        subject_person_id: p_o9Ly7NXgeJLDgSWHFeZMoM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 746年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0746-01-01
            latest: 0746-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5tGuhSwuvXWYQLKuxLFkjL
          claim_id: c_hXGR5a2XnSHarpnAqDfeRV
          source_id: s_g5xMZHmRNCerARfRYUuVsy
          stance: supports
          locator: CBDB:140941
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 746
          source:
            id: s_g5xMZHmRNCerARfRYUuVsy
            source_type: api_record
            title: 中国历代人物传记资料库：王元欽（CBDB 140941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140941&o=json
            external_identifier: CBDB:140941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_K8R2uXV6Xu3A45QEedKSBu
        subject_person_id: p_o9Ly7NXgeJLDgSWHFeZMoM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元欽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_okJSt5112RVuCJ61FScKqN
          claim_id: c_K8R2uXV6Xu3A45QEedKSBu
          source_id: s_g5xMZHmRNCerARfRYUuVsy
          stance: supports
          locator: CBDB:140941
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 746
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_xEE8PzJPF9Sao_VHD9-bSj
        subject_person_id: p_o9Ly7NXgeJLDgSWHFeZMoM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wHC2sBgwnRC7spt9YzBbGz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3GouuoXw0Tu8Cj4qOYjVkc
          claim_id: c_xEE8PzJPF9Sao_VHD9-bSj
          source_id: s_UzfMXfEFiMvgC7ktyKFy4H
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 137：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UzfMXfEFiMvgC7ktyKFy4H
            source_type: api_record
            title: 中国历代人物传记资料库：王秘（CBDB 153893）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153893&o=json
            external_identifier: CBDB:153893
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.865Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wHC2sBgwnRC7spt9YzBbGz
        status: active
        display_name: 王秘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元欽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元欽（卒于746年），唐人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 140941） | accepted |
| death.date | 746年 | accepted |
| name.primary | 王元欽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_wHC2sBgwnRC7spt9YzBbGz | 王秘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王秘（CBDB 153893）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153893&o=json)
- [中国历代人物传记资料库：王元欽（CBDB 140941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140941&o=json)
