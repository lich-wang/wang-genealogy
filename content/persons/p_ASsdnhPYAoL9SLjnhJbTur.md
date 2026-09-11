---
schema: wang-person/v1
id: p_ASsdnhPYAoL9SLjnhJbTur
status: active
merged_into: null
display_name: 李氏
cbdb_id: 235519
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AxSd9lFN7RSUeX_-ziJJcj
        subject_person_id: p_ASsdnhPYAoL9SLjnhJbTur
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏，史料所见人物。本项目依据《李氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bShdY82qzgqD46DEeJxMwg
          claim_id: c_AxSd9lFN7RSUeX_-ziJJcj
          source_id: s_E9jYXywKJpJnEAP3XtES6A
          stance: supports
          locator: Q65837803
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_E9jYXywKJpJnEAP3XtES6A
            source_type: api_record
            title: 维基数据：李氏（Q65837803）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65837803
            external_identifier: Q65837803
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aFjN93tr1EPwC7Le8AYVJU
        subject_person_id: p_ASsdnhPYAoL9SLjnhJbTur
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_92mn6ZFb1SoGhAkKibFihR
          claim_id: c_aFjN93tr1EPwC7Le8AYVJU
          source_id: s_E9jYXywKJpJnEAP3XtES6A
          stance: supports
          locator: Q65837803
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: *a1
        - id: cs_8FxMvP1oGSGumi6eT5QEnu
          claim_id: c_aFjN93tr1EPwC7Le8AYVJU
          source_id: s_gMNCGGi88T2BA2qhP79M29
          stance: supports
          locator: CBDB:235519
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_gMNCGGi88T2BA2qhP79M29
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：李氏（235519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235519&o=json
            external_identifier: CBDB:235519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_uwkJFeojkFMrnt1tHktEB6
        subject_person_id: p_1vwHH8EjSEP1q2oifpwF8P
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ASsdnhPYAoL9SLjnhJbTur
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P4BneRuu9yAh29XMUi6yTF
          claim_id: c_uwkJFeojkFMrnt1tHktEB6
          source_id: s_Y1XjPJB2E3sdU1bzkZCXWH
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_Y1XjPJB2E3sdU1bzkZCXWH
            source_type: api_record
            title: 维基数据：王象春（Q16260916）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260916
            external_identifier: Q16260916
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:52.050Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B1%A1%E6%98%A5
        - id: cs_7HNXB9mEht5dv2JU8m14ob
          claim_id: c_uwkJFeojkFMrnt1tHktEB6
          source_id: s_E9jYXywKJpJnEAP3XtES6A
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_GaBY2EFKcwTRRpUZ8guewx
          claim_id: c_uwkJFeojkFMrnt1tHktEB6
          source_id: s_XjxsW4fSFjTSLcgZb1nJFe
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：萬曆三十八年庚戌科序齒錄:一卷
          source:
            id: s_XjxsW4fSFjTSLcgZb1nJFe
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王象春（126731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126731&o=json
            external_identifier: CBDB:126731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:52.218Z
            metadata_json: null
      object_person:
        id: p_1vwHH8EjSEP1q2oifpwF8P
        status: active
        display_name: 王象春
        merged_into_person_id: null
    - claim:
        id: c_A0kelLciiWY0jVS4XosCcL
        subject_person_id: p_ASsdnhPYAoL9SLjnhJbTur
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_1vwHH8EjSEP1q2oifpwF8P
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F2nkSljYEUohOirEMAsdFx
          claim_id: c_A0kelLciiWY0jVS4XosCcL
          source_id: s_gMNCGGi88T2BA2qhP79M29
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第二百四十名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_1vwHH8EjSEP1q2oifpwF8P
        status: active
        display_name: 王象春
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李氏，史料所见人物。本项目依据《李氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_1vwHH8EjSEP1q2oifpwF8P | 王象春 | accepted |
| spouses | p_1vwHH8EjSEP1q2oifpwF8P | 王象春 | accepted |

## 外部来源

- [维基数据：李氏（Q65837803）](https://www.wikidata.org/wiki/Q65837803)
- [维基数据：王象春（Q16260916）](https://www.wikidata.org/wiki/Q16260916)
- [CBDB 中国历代人物传记资料库：李氏（235519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235519&o=json)
- [CBDB 中国历代人物传记资料库：王象春（126731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126731&o=json)
