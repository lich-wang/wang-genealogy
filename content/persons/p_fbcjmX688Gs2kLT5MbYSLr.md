---
schema: wang-person/v1
id: p_fbcjmX688Gs2kLT5MbYSLr
status: active
merged_into: null
display_name: 王伯堅
cbdb_id: 273594
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j6mp8FeCxx5JJ3w5bK761b
        subject_person_id: p_fbcjmX688Gs2kLT5MbYSLr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯堅，明人物。中国历代人物传记资料库（CBDB）以人物编号 273594 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_uI26fObyEW7cgkV2BMjFQu
          claim_id: c_j6mp8FeCxx5JJ3w5bK761b
          source_id: s_5GmKVCG3pEU9z49RRsPfCX
          stance: supports
          locator: CBDB:273594
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5GmKVCG3pEU9z49RRsPfCX
            source_type: api_record
            title: 中国历代人物传记资料库：王伯堅（CBDB 273594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273594&o=json
            external_identifier: CBDB:273594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HKL66rGitADgJ5XRsEtPUX
        subject_person_id: p_fbcjmX688Gs2kLT5MbYSLr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯堅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GKFLBuPVZaaBLHiYvs2Wfg
          claim_id: c_HKL66rGitADgJ5XRsEtPUX
          source_id: s_5GmKVCG3pEU9z49RRsPfCX
          stance: supports
          locator: CBDB:273594
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_5GmKVCG3pEU9z49RRsPfCX
            source_type: api_record
            title: 中国历代人物传记资料库：王伯堅（CBDB 273594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273594&o=json
            external_identifier: CBDB:273594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ZtcbwnNIx-GqH_gU-7tmTd
        subject_person_id: p_fbcjmX688Gs2kLT5MbYSLr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YZgMMK2h5d44s5CGoUpM7o
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uiyRiNY5bekK928s7e81KO
          claim_id: c_ZtcbwnNIx-GqH_gU-7tmTd
          source_id: s_5GmKVCG3pEU9z49RRsPfCX
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百三十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YZgMMK2h5d44s5CGoUpM7o
        status: active
        display_name: 王盧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王伯堅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王伯堅，明人物。中国历代人物传记资料库（CBDB）以人物编号 273594 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王伯堅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_YZgMMK2h5d44s5CGoUpM7o | 王盧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯堅（CBDB 273594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273594&o=json)
