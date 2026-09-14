---
schema: wang-person/v1
id: p_74BX4CVF4zu1PfPasjWvf5
status: active
merged_into: null
display_name: 王俊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NG4R7QEJ2gH8BPZh3ZQiQm
        subject_person_id: p_74BX4CVF4zu1PfPasjWvf5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BGt66cyhQgQ96F4e2qc2nj
          claim_id: c_NG4R7QEJ2gH8BPZh3ZQiQm
          source_id: s_XP6ELUZ8XHZxJjbnqcGsyh
          stance: supports
          locator: CBDB:250573
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（250573）
          source: &a1
            id: s_XP6ELUZ8XHZxJjbnqcGsyh
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 250573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250573&o=json
            external_identifier: CBDB:250573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.230Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VkJ5WU9v1US2aMNcAQebSg
        subject_person_id: p_74BX4CVF4zu1PfPasjWvf5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊，明人物。成化十一年進士，籍贯海南衛。（中国历代人物传记资料库 CBDB 250573）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4vTAyMTIVZuPpE0UhplhO4
          claim_id: c_VkJ5WU9v1US2aMNcAQebSg
          source_id: s_XP6ELUZ8XHZxJjbnqcGsyh
          stance: supports
          locator: CBDB:250573
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Fs6k_-xxqDvSTnfe28PdQ1
        subject_person_id: p_P6jrnxynY7Dudu6LBvAAqQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_74BX4CVF4zu1PfPasjWvf5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qhT_V6ZJKk8Yqcxngirx6v
          claim_id: c_Fs6k_-xxqDvSTnfe28PdQ1
          source_id: s_ILR_ezkD2zoG5YqDnyaLlW
          stance: supports
          locator: CBDB：兄弟 王儼（338703）之父／母 王璟
          quotation: null
          interpretation_note: 由兄弟关系推断：王俊 与 王儼 为同胞（CBDB 记「兄」），王儼 之父／母即 王俊 之父／母。
          source:
            id: s_ILR_ezkD2zoG5YqDnyaLlW
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 250573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250573&o=json
            external_identifier: CBDB:250573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P6jrnxynY7Dudu6LBvAAqQ
        status: active
        display_name: 王璟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_dB5DCfFQoYv88X0IeZlQHi
        subject_person_id: p_74BX4CVF4zu1PfPasjWvf5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GGm15a95bmjM4yFUpB9QGR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9xFO5a70SPUFDmfUGKar4J
          claim_id: c_dB5DCfFQoYv88X0IeZlQHi
          source_id: s_ILR_ezkD2zoG5YqDnyaLlW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 338703 王儼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ILR_ezkD2zoG5YqDnyaLlW
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 250573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250573&o=json
            external_identifier: CBDB:250573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GGm15a95bmjM4yFUpB9QGR
        status: active
        display_name: 王儼
        merged_into_person_id: null
---

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| bio.summary | 王俊，明人物。成化十一年進士，籍贯海南衛。（中国历代人物传记资料库 CBDB 250573） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_P6jrnxynY7Dudu6LBvAAqQ | 王璟 | accepted |
| other | p_GGm15a95bmjM4yFUpB9QGR | 王儼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 250573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250573&o=json)
