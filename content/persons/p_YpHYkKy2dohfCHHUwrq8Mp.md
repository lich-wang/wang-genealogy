---
schema: wang-person/v1
id: p_YpHYkKy2dohfCHHUwrq8Mp
status: active
merged_into: null
display_name: 王小䔪
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WiX4NFZSoKeSbnqAUzHXuf
        subject_person_id: p_YpHYkKy2dohfCHHUwrq8Mp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王小䔪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UDYpLdmhKkGvpzR4NMM7hb
          claim_id: c_WiX4NFZSoKeSbnqAUzHXuf
          source_id: s_WEEg1ye43sbS44Zic1B64h
          stance: supports
          locator: CBDB:689358
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（689358）
          source: &a1
            id: s_WEEg1ye43sbS44Zic1B64h
            source_type: api_record
            title: 中国历代人物传记资料库：王小䔪（CBDB 689358）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689358&o=json
            external_identifier: CBDB:689358
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.473Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZY8T8Kyd1qkwV472KpSP5F
        subject_person_id: p_YpHYkKy2dohfCHHUwrq8Mp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王小䔪，史料所见人物。本项目依据《中国历代人物传记资料库：王小䔪（CBDB 689358）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ybv8yZDbNrnVamuoEKOKI8
          claim_id: c_ZY8T8Kyd1qkwV472KpSP5F
          source_id: s_WEEg1ye43sbS44Zic1B64h
          stance: supports
          locator: CBDB:689358
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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
        id: c_zxdRAomQ1pw1VdEi-tS5Ic
        subject_person_id: p_s2Ci3S96sKz8q9W2YdX1pM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YpHYkKy2dohfCHHUwrq8Mp
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jtslq3Thv4KyAiRLcqeN5A
          claim_id: c_zxdRAomQ1pw1VdEi-tS5Ic
          source_id: s_WEEg1ye43sbS44Zic1B64h
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，40/王審瓊墓誌：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_s2Ci3S96sKz8q9W2YdX1pM
        status: active
        display_name: 王審瓊
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王小䔪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王小䔪 | accepted |
| bio.summary | 王小䔪，史料所见人物。本项目依据《中国历代人物传记资料库：王小䔪（CBDB 689358）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_s2Ci3S96sKz8q9W2YdX1pM | 王審瓊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王小䔪（CBDB 689358）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689358&o=json)
