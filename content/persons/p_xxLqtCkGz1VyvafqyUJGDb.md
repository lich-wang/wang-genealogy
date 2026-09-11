---
schema: wang-person/v1
id: p_xxLqtCkGz1VyvafqyUJGDb
status: active
merged_into: null
display_name: 王詮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4aPcTM7o1kEa1EtQZQhECo
        subject_person_id: p_xxLqtCkGz1VyvafqyUJGDb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5V3Dk1hTJLVcYTV4Maw8Zq
          claim_id: c_4aPcTM7o1kEa1EtQZQhECo
          source_id: s_sRiTHUpJx1dCqM417fq5Xn
          stance: supports
          locator: CBDB:155948
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（155948）
          source: &a1
            id: s_sRiTHUpJx1dCqM417fq5Xn
            source_type: api_record
            title: 中国历代人物传记资料库：王詮（CBDB 155948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155948&o=json
            external_identifier: CBDB:155948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.885Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E5CWN5T12JvSE4DCMykmKK
        subject_person_id: p_xxLqtCkGz1VyvafqyUJGDb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詮，史料所见人物。本项目依据《中国历代人物传记资料库：王詮（CBDB 155948）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gfR4hcUEf49qvqAgE83iKw
          claim_id: c_E5CWN5T12JvSE4DCMykmKK
          source_id: s_sRiTHUpJx1dCqM417fq5Xn
          stance: supports
          locator: CBDB:155948
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-jp6c0wgetqe4-Prg6fmDb
        subject_person_id: p_738t8jZyTZKAPviDCRrrJx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xxLqtCkGz1VyvafqyUJGDb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XbqXYnT1R_LZaBBW8I49WQ
          claim_id: c_-jp6c0wgetqe4-Prg6fmDb
          source_id: s_GPNRKDZJP3EbeT9neoB5Aa
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 98：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GPNRKDZJP3EbeT9neoB5Aa
            source_type: api_record
            title: 中国历代人物传记资料库：王平（CBDB 141348）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141348&o=json
            external_identifier: CBDB:141348
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.556Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_738t8jZyTZKAPviDCRrrJx
        status: active
        display_name: 王平
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王詮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詮 | accepted |
| bio.summary | 王詮，史料所见人物。本项目依据《中国历代人物传记资料库：王詮（CBDB 155948）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_738t8jZyTZKAPviDCRrrJx | 王平 | accepted |

## 外部来源

- [中国历代人物传记资料库：王平（CBDB 141348）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141348&o=json)
- [中国历代人物传记资料库：王詮（CBDB 155948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155948&o=json)
