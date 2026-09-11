---
schema: wang-person/v1
id: p_8wBKhGEndLXas4ENZDEWFf
status: active
merged_into: null
display_name: 王好敬
cbdb_id: 236421
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ioeZxE3gTAYiA7477YKhzi
        subject_person_id: p_8wBKhGEndLXas4ENZDEWFf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王好敬，明人物。中国历代人物传记资料库（CBDB）以人物编号 236421 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_650tonZzn4MTRhO0QWZGaX
          claim_id: c_ioeZxE3gTAYiA7477YKhzi
          source_id: s_T6Dc6LtLNyQ6W4CUgTa4zV
          stance: supports
          locator: CBDB:236421
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_T6Dc6LtLNyQ6W4CUgTa4zV
            source_type: api_record
            title: 中国历代人物传记资料库：王好敬（CBDB 236421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236421&o=json
            external_identifier: CBDB:236421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2L33XxBpA5W6mSpiUanAW6
        subject_person_id: p_8wBKhGEndLXas4ENZDEWFf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王好敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VGJ3pTN2fs1XwQf7VPBbPA
          claim_id: c_2L33XxBpA5W6mSpiUanAW6
          source_id: s_T6Dc6LtLNyQ6W4CUgTa4zV
          stance: supports
          locator: CBDB:236421
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_T6Dc6LtLNyQ6W4CUgTa4zV
            source_type: api_record
            title: 中国历代人物传记资料库：王好敬（CBDB 236421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236421&o=json
            external_identifier: CBDB:236421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_3sEII4VJ7AqobFljGFbGt9
        subject_person_id: p_8wBKhGEndLXas4ENZDEWFf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fRd4kHJooaS9AErLa6rFp5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zPJ1le_POd6w98XY11dVCX
          claim_id: c_3sEII4VJ7AqobFljGFbGt9
          source_id: s_T6Dc6LtLNyQ6W4CUgTa4zV
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百五十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fRd4kHJooaS9AErLa6rFp5
        status: active
        display_name: 王瀠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王好敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王好敬，明人物。中国历代人物传记资料库（CBDB）以人物编号 236421 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王好敬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fRd4kHJooaS9AErLa6rFp5 | 王瀠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王好敬（CBDB 236421）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236421&o=json)
