---
schema: wang-person/v1
id: p_k7BrFTNYAi2RVwi6VX8Am2
status: active
merged_into: null
display_name: 王濤
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jE3HWimoEL6JBNtSTsNa3w
        subject_person_id: p_k7BrFTNYAi2RVwi6VX8Am2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ge1Q3kES4RSR4XqFFT67VD
          claim_id: c_jE3HWimoEL6JBNtSTsNa3w
          source_id: s_8eCLutUpU5CYsf7r17zvqK
          stance: supports
          locator: CBDB:20106
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（20106）
          source: &a1
            id: s_8eCLutUpU5CYsf7r17zvqK
            source_type: api_record
            title: 中国历代人物传记资料库：王濤（CBDB 20106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20106&o=json
            external_identifier: CBDB:20106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.759Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7MmNLA1jPW2yNyknr8B34L
        subject_person_id: p_k7BrFTNYAi2RVwi6VX8Am2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濤，宋人物。籍贯閩縣，入仕進士，曾任朝散大夫。（中国历代人物传记资料库 CBDB 20106）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wlg07rwGFf31zcyzCh1GAC
          claim_id: c_7MmNLA1jPW2yNyknr8B34L
          source_id: s_8eCLutUpU5CYsf7r17zvqK
          stance: supports
          locator: CBDB:20106
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uMhWJU3M-0mRlpxtxR_tyo
        subject_person_id: p_rdLJMZJGiuRT5kdBLf7G82
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_k7BrFTNYAi2RVwi6VX8Am2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EOsA9IPdVrAdTk3ogVvP8C
          claim_id: c_uMhWJU3M-0mRlpxtxR_tyo
          source_id: s_94T8jvheJfnkbukw41Py42
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1244：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_94T8jvheJfnkbukw41Py42
            source_type: api_record
            title: 中国历代人物传记资料库：王晦（CBDB 20105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20105&o=json
            external_identifier: CBDB:20105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rdLJMZJGiuRT5kdBLf7G82
        status: active
        display_name: 王晦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王濤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濤 | accepted |
| bio.summary | 王濤，宋人物。籍贯閩縣，入仕進士，曾任朝散大夫。（中国历代人物传记资料库 CBDB 20106） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rdLJMZJGiuRT5kdBLf7G82 | 王晦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王晦（CBDB 20105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20105&o=json)
- [中国历代人物传记资料库：王濤（CBDB 20106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20106&o=json)
