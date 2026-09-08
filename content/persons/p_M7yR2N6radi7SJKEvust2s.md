---
schema: wang-person/v1
id: p_M7yR2N6radi7SJKEvust2s
status: active
merged_into: null
display_name: 王临
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rtm6PcF6gZSjD1t5UY2H68
        subject_person_id: p_M7yR2N6radi7SJKEvust2s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王临，宋人物。CBDB 记录其籍贯记录为洹水，入仕记录为科舉: 進士(籠統)，曾任朝請大夫、太常寺博士。中国历代人物传记资料库（CBDB）以人物编号 2133 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_FEkz9NhHC5SweMuJDKE6HZ
          claim_id: c_rtm6PcF6gZSjD1t5UY2H68
          source_id: s_5Ft5anECThLjexJPSxzXdK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_5Ft5anECThLjexJPSxzXdK
            source_type: api_record
            title: 维基数据：王临（Q45360372）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45360372
            external_identifier: Q45360372
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:31.440Z
            metadata_json: null
        - id: cs_E_kxM1fqSpz1qUkLOt7L4M
          claim_id: c_rtm6PcF6gZSjD1t5UY2H68
          source_id: s_6mrtX7gdxC7sQ12Pspp7XE
          stance: supports
          locator: CBDB:2133
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6mrtX7gdxC7sQ12Pspp7XE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王廣臨（2133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=2133&o=json
            external_identifier: CBDB:2133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:31.587Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9iTNvB5fLfwEZZtfknZC3E
        subject_person_id: p_M7yR2N6radi7SJKEvust2s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王临
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8mR33wc9hP88iBiA5wma7q
          claim_id: c_9iTNvB5fLfwEZZtfknZC3E
          source_id: s_5Ft5anECThLjexJPSxzXdK
          stance: supports
          locator: Q45360372
          quotation: null
          interpretation_note: null
          source:
            id: s_5Ft5anECThLjexJPSxzXdK
            source_type: api_record
            title: 维基数据：王临（Q45360372）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45360372
            external_identifier: Q45360372
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:31.440Z
            metadata_json: null
        - id: cs_WzoBvqdTM5PBCZ5UQDN83E
          claim_id: c_9iTNvB5fLfwEZZtfknZC3E
          source_id: s_6mrtX7gdxC7sQ12Pspp7XE
          stance: supports
          locator: Q45360372
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jE1omeaqDbQAsjg91vfX5b
        subject_person_id: p_tmq6Wnq1CjinFj62NTxvnd
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_M7yR2N6radi7SJKEvust2s
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C8RGYVzjh6R4psQUGzvHys
          claim_id: c_jE1omeaqDbQAsjg91vfX5b
          source_id: s_6mrtX7gdxC7sQ12Pspp7XE
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：鄖溪集
          source: *a1
        - id: cs_vj2AsPHzsR1AT2xwQwHHGD
          claim_id: c_jE1omeaqDbQAsjg91vfX5b
          source_id: s_Z4fxo5rB3BvheXUFeqMwGa
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：鄖溪集
          source:
            id: s_Z4fxo5rB3BvheXUFeqMwGa
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師顏（22250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22250&o=json
            external_identifier: CBDB:22250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_tmq6Wnq1CjinFj62NTxvnd
        status: active
        display_name: 王师颜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王临

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王临，宋人物。CBDB 记录其籍贯记录为洹水，入仕记录为科舉: 進士(籠統)，曾任朝請大夫、太常寺博士。中国历代人物传记资料库（CBDB）以人物编号 2133 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王临 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tmq6Wnq1CjinFj62NTxvnd | 王师颜 | accepted |

## 外部来源

- [维基数据：王临（Q45360372）](https://www.wikidata.org/wiki/Q45360372)
- [CBDB 中国历代人物传记资料库：王廣臨（2133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=2133&o=json)
- [CBDB 中国历代人物传记资料库：王師顏（22250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22250&o=json)
