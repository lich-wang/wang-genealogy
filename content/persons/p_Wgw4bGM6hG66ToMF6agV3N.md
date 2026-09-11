---
schema: wang-person/v1
id: p_Wgw4bGM6hG66ToMF6agV3N
status: active
merged_into: null
display_name: 王就學
cbdb_id: 126705
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4xBwE1bPRTYLzJJnMiu5rm
        subject_person_id: p_Wgw4bGM6hG66ToMF6agV3N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王就學，明人物。中国历代人物传记资料库（CBDB）以人物编号 126705 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_HszQoCcZInIwUuKEL3smMg
          claim_id: c_4xBwE1bPRTYLzJJnMiu5rm
          source_id: s_2JJKkT51N9J7WXDNfuo8De
          stance: supports
          locator: CBDB:126705
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2JJKkT51N9J7WXDNfuo8De
            source_type: api_record
            title: 中国历代人物传记资料库：王就學（CBDB 126705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126705&o=json
            external_identifier: CBDB:126705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vLC8EAxffu7DT41dehBd2N
        subject_person_id: p_Wgw4bGM6hG66ToMF6agV3N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王就學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GXqQHNF8yvbZDhxSZzCGTx
          claim_id: c_vLC8EAxffu7DT41dehBd2N
          source_id: s_2JJKkT51N9J7WXDNfuo8De
          stance: supports
          locator: CBDB:126705
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_2JJKkT51N9J7WXDNfuo8De
            source_type: api_record
            title: 中国历代人物传记资料库：王就學（CBDB 126705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126705&o=json
            external_identifier: CBDB:126705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uU0Xsu8owSR74HvFKvO9HX
        subject_person_id: p_17jUtXnoMjU3kpESe25w4v
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Wgw4bGM6hG66ToMF6agV3N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-XGBSaybUs3YxwD8JT8bAZ
          claim_id: c_uU0Xsu8owSR74HvFKvO9HX
          source_id: s_2JJKkT51N9J7WXDNfuo8De
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第六十七名：父王道生
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_17jUtXnoMjU3kpESe25w4v
        status: active
        display_name: 王道生
        merged_into_person_id: null
  children:
    - claim:
        id: c_r2kXFddK0T277yLyqXYYfh
        subject_person_id: p_Wgw4bGM6hG66ToMF6agV3N
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dj6AH9LNT8j6f7joZ4NwDY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__v35e4ZwX-2bGZoDaOvA7Y
          claim_id: c_r2kXFddK0T277yLyqXYYfh
          source_id: s_qsY2KmMEhGJjqtbbhsEGHu
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第六十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qsY2KmMEhGJjqtbbhsEGHu
            source_type: api_record
            title: 中国历代人物传记资料库：王國鼎（CBDB 226715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226715&o=json
            external_identifier: CBDB:226715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.472Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dj6AH9LNT8j6f7joZ4NwDY
        status: active
        display_name: 王國鼎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王就學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王就學，明人物。中国历代人物传记资料库（CBDB）以人物编号 126705 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王就學 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_17jUtXnoMjU3kpESe25w4v | 王道生 | accepted |
| children | p_dj6AH9LNT8j6f7joZ4NwDY | 王國鼎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國鼎（CBDB 226715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226715&o=json)
- [中国历代人物传记资料库：王就學（CBDB 126705）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126705&o=json)
