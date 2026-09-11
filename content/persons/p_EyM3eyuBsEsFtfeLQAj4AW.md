---
schema: wang-person/v1
id: p_EyM3eyuBsEsFtfeLQAj4AW
status: active
merged_into: null
display_name: 王粲
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hioAuMuwPb4pcU7F8Hzoeg
        subject_person_id: p_EyM3eyuBsEsFtfeLQAj4AW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王粲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_69gBPP6Q8dq1pKEncTWAQ7
          claim_id: c_hioAuMuwPb4pcU7F8Hzoeg
          source_id: s_fFLusNS79qHLUafZ61E4gX
          stance: supports
          locator: CBDB:150496
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（150496）
          source: &a1
            id: s_fFLusNS79qHLUafZ61E4gX
            source_type: api_record
            title: 中国历代人物传记资料库：王粲（CBDB 150496）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150496&o=json
            external_identifier: CBDB:150496
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.816Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6so186CsGFQmS7a3tK2XEm
        subject_person_id: p_EyM3eyuBsEsFtfeLQAj4AW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王粲，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 150496）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_35UR3l76qvgO1IiRexjc3c
          claim_id: c_6so186CsGFQmS7a3tK2XEm
          source_id: s_fFLusNS79qHLUafZ61E4gX
          stance: supports
          locator: CBDB:150496
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_8FLeUrrcgHUSyVCBQw_ONc
        subject_person_id: p_EyM3eyuBsEsFtfeLQAj4AW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YncsR9HaGNAFSPXGzcoR8F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KaOWD0BctPT6heGbmj-EvE
          claim_id: c_8FLeUrrcgHUSyVCBQw_ONc
          source_id: s_fFLusNS79qHLUafZ61E4gX
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changan 56：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YncsR9HaGNAFSPXGzcoR8F
        status: active
        display_name: 王詢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_OfR8cPTylAxk8e7PNBDlXE
        subject_person_id: p_EyM3eyuBsEsFtfeLQAj4AW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bEJ6zpyrnLKEfRt5W2BBn8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B_f56mMqhQtX7My1BWWLqg
          claim_id: c_OfR8cPTylAxk8e7PNBDlXE
          source_id: s_8zGcRhvW69VwTi7Cc3csTG
          stance: supports
          locator: 唐代墓誌匯編:二卷，Shenlong 6：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8zGcRhvW69VwTi7Cc3csTG
            source_type: api_record
            title: 中国历代人物传记资料库：王及德（CBDB 140183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140183&o=json
            external_identifier: CBDB:140183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.201Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bEJ6zpyrnLKEfRt5W2BBn8
        status: active
        display_name: 王及德
        merged_into_person_id: null
  other: []
---

# 王粲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王粲 | accepted |
| bio.summary | 王粲，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 150496） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_YncsR9HaGNAFSPXGzcoR8F | 王詢 | accepted |
| descendants | p_bEJ6zpyrnLKEfRt5W2BBn8 | 王及德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王粲（CBDB 150496）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150496&o=json)
- [中国历代人物传记资料库：王及德（CBDB 140183）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140183&o=json)
