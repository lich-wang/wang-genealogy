---
schema: wang-person/v1
id: p_QF2bE4nFJ23UCeYuUNVU4y
status: active
merged_into: null
display_name: 王孟华
cbdb_id: 302966
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MopcHbUKYyp6N31Ph72Yc1
        subject_person_id: p_QF2bE4nFJ23UCeYuUNVU4y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟华
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iy83VXV298qcjpyqA8HD2j
          claim_id: c_MopcHbUKYyp6N31Ph72Yc1
          source_id: s_JPS87FRrWQm4pjAuRjqBLG
          stance: supports
          locator: Q45626753
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_JPS87FRrWQm4pjAuRjqBLG
            source_type: api_record
            title: 维基数据：王孟华（Q45626753）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45626753
            external_identifier: Q45626753
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_Do3k1ieLHfBDe149nAqHzA
          claim_id: c_MopcHbUKYyp6N31Ph72Yc1
          source_id: s_vH64iAiKp2gTrnJMBPVsxH
          stance: supports
          locator: CBDB:302966
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_vH64iAiKp2gTrnJMBPVsxH
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王孟華（302966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302966&o=json
            external_identifier: CBDB:302966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V9RHxSFyxQ8srke8zLmxJw
        subject_person_id: p_QF2bE4nFJ23UCeYuUNVU4y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟华，明人物。嘉靖二十年進士，曾任壽官。（中国历代人物传记资料库 CBDB 302966）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UJEamQLHpkdYzL5X46hDG1
          claim_id: c_V9RHxSFyxQ8srke8zLmxJw
          source_id: s_JPS87FRrWQm4pjAuRjqBLG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
        - id: cs_IEaQRNxRV4A0DFvmeZEGrN
          claim_id: c_V9RHxSFyxQ8srke8zLmxJw
          source_id: s_vH64iAiKp2gTrnJMBPVsxH
          stance: supports
          locator: CBDB:302966
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a2
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_bumnwNPAP8b4FUMmKycKgu
        subject_person_id: p_QF2bE4nFJ23UCeYuUNVU4y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ptMfEt1rAT4WiPXRdKXa9c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wAmyNjjcscKQFZAysjPnbq
          claim_id: c_bumnwNPAP8b4FUMmKycKgu
          source_id: s_JPS87FRrWQm4pjAuRjqBLG
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_epRhHTnQKHQvkDqJP3W7ri
          claim_id: c_bumnwNPAP8b4FUMmKycKgu
          source_id: s_NsaP8YXgvL5EfLzqYqofhp
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_NsaP8YXgvL5EfLzqYqofhp
            source_type: api_record
            title: 维基数据：王馨（Q45626817）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45626817
            external_identifier: Q45626817
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:20.507Z
            metadata_json: null
      object_person:
        id: p_ptMfEt1rAT4WiPXRdKXa9c
        status: active
        display_name: 王馨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_0rYTYuFWaZm5bNmceqFevx
        subject_person_id: p_QF2bE4nFJ23UCeYuUNVU4y
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4GbPExDFna3bpZBzyQEK5D
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a8I7NYIPKYBQ1YMNdZa7-C
          claim_id: c_0rYTYuFWaZm5bNmceqFevx
          source_id: s_vH64iAiKp2gTrnJMBPVsxH
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第八十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_4GbPExDFna3bpZBzyQEK5D
        status: active
        display_name: 王崇古
        merged_into_person_id: null
  other: []
---

# 王孟华

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孟华 | accepted |
| bio.summary | 王孟华，明人物。嘉靖二十年進士，曾任壽官。（中国历代人物传记资料库 CBDB 302966） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ptMfEt1rAT4WiPXRdKXa9c | 王馨 | accepted |
| descendants | p_4GbPExDFna3bpZBzyQEK5D | 王崇古 | accepted |

## 外部来源

- [维基数据：王孟华（Q45626753）](https://www.wikidata.org/wiki/Q45626753)
- [维基数据：王馨（Q45626817）](https://www.wikidata.org/wiki/Q45626817)
- [CBDB 中国历代人物传记资料库：王孟華（302966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302966&o=json)
