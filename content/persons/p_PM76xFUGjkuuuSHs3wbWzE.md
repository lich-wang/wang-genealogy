---
schema: wang-person/v1
id: p_PM76xFUGjkuuuSHs3wbWzE
status: active
merged_into: null
display_name: 王兢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V6E5998G892m75D1H7piuF
        subject_person_id: p_PM76xFUGjkuuuSHs3wbWzE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kvfs3wYzaNpKX1QJMqAf4a
          claim_id: c_V6E5998G892m75D1H7piuF
          source_id: s_Pff5MaDgdWZrWFoGAdq1oj
          stance: supports
          locator: CBDB:1789
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1789）
          source: &a1
            id: s_Pff5MaDgdWZrWFoGAdq1oj
            source_type: api_record
            title: 中国历代人物传记资料库：王兢（CBDB 1789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1789&o=json
            external_identifier: CBDB:1789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.256Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kKdurXU6ZXiWRG2GbqqXNN
        subject_person_id: p_PM76xFUGjkuuuSHs3wbWzE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1032年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DDBEBTvCWG8AMB8DUMsnuo
          claim_id: c_kKdurXU6ZXiWRG2GbqqXNN
          source_id: s_Pff5MaDgdWZrWFoGAdq1oj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_XWqHJJAfK2aTUBrzXv2SUY
        subject_person_id: p_PM76xFUGjkuuuSHs3wbWzE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1095年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UMaN2wP6fwuJpg82EA9oFA
          claim_id: c_XWqHJJAfK2aTUBrzXv2SUY
          source_id: s_Pff5MaDgdWZrWFoGAdq1oj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qbZaG79G7eCfpTb9BygG9v
        subject_person_id: p_PM76xFUGjkuuuSHs3wbWzE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兢（1032年—1095年），宋人物。籍贯南陽，入仕進士，曾任左朝請大夫、司戶參軍、司農寺少卿。（中国历代人物传记资料库 CBDB 1789）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zqIukoye0WSA-HKoyms_Kj
          claim_id: c_qbZaG79G7eCfpTb9BygG9v
          source_id: s_Pff5MaDgdWZrWFoGAdq1oj
          stance: supports
          locator: CBDB:1789
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cjuewR_7ksJOqgQay7qudf
        subject_person_id: p_CF66QoMP3gSv4SEHYTeKrP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PM76xFUGjkuuuSHs3wbWzE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I4bxRcIMpvHaa0wIVYVXIE
          claim_id: c_cjuewR_7ksJOqgQay7qudf
          source_id: s_CkrD9QeV99k4w84NxDkRJJ
          stance: supports
          locator: CBDB 双向互证（子 王兢 ⇄ 父 王餘慶）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_CkrD9QeV99k4w84NxDkRJJ
            source_type: api_record
            title: 中国历代人物传记资料库：王餘慶（CBDB 3934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3934&o=json
            external_identifier: CBDB:3934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.416Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CF66QoMP3gSv4SEHYTeKrP
        status: active
        display_name: 王餘慶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王兢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兢 | accepted |
| birth.date | 1032年 | accepted |
| death.date | 1095年 | accepted |
| bio.summary | 王兢（1032年—1095年），宋人物。籍贯南陽，入仕進士，曾任左朝請大夫、司戶參軍、司農寺少卿。（中国历代人物传记资料库 CBDB 1789） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CF66QoMP3gSv4SEHYTeKrP | 王餘慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王兢（CBDB 1789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1789&o=json)
- [中国历代人物传记资料库：王餘慶（CBDB 3934）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3934&o=json)
