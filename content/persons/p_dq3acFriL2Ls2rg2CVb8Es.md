---
schema: wang-person/v1
id: p_dq3acFriL2Ls2rg2CVb8Es
status: active
merged_into: null
display_name: 王三錫
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7Y8rZhA67Di368PHdzdkd6
        subject_person_id: p_dq3acFriL2Ls2rg2CVb8Es
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v67a2UgyvHFyczJ9kKXXDu
          claim_id: c_7Y8rZhA67Di368PHdzdkd6
          source_id: s_hgKuFTZXXVauyp974hTHpm
          stance: supports
          locator: CBDB:204223
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204223）
          source: &a1
            id: s_hgKuFTZXXVauyp974hTHpm
            source_type: api_record
            title: 中国历代人物传记资料库：王三錫（CBDB 204223）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204223&o=json
            external_identifier: CBDB:204223
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.819Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gXwgEG2YNmzjkfSjfQKPgg
        subject_person_id: p_dq3acFriL2Ls2rg2CVb8Es
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1524年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tNud9MerbJnzbJ9hLaCD95
          claim_id: c_gXwgEG2YNmzjkfSjfQKPgg
          source_id: s_hgKuFTZXXVauyp974hTHpm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JRMvTg5rx5YAYETUrqXCEt
        subject_person_id: p_dq3acFriL2Ls2rg2CVb8Es
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三錫（生于1524年），明人物。明清進士進士，籍贯嘉興，入仕進士。（中国历代人物传记资料库 CBDB 204223）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rzun7rUkDx3YkQEfnvw7i3
          claim_id: c_JRMvTg5rx5YAYETUrqXCEt
          source_id: s_hgKuFTZXXVauyp974hTHpm
          stance: supports
          locator: CBDB:204223
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Re9ugLsW9EINnRWnbV36WF
        subject_person_id: p_9RFe9RzCfLtq53n3raxU8d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dq3acFriL2Ls2rg2CVb8Es
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ADDOZXQdJ89h2eZMsKYsBe
          claim_id: c_Re9ugLsW9EINnRWnbV36WF
          source_id: s_89q4qpNWok5qa5JTYihq29
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_89q4qpNWok5qa5JTYihq29
            source_type: api_record
            title: 中国历代人物传记资料库：王綬（CBDB 316189）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316189&o=json
            external_identifier: CBDB:316189
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.956Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9RFe9RzCfLtq53n3raxU8d
        status: active
        display_name: 王綬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_MijOgBzqhhgk0HI3Xg87yK
        subject_person_id: p_bC74FaoMKoE1ese9LFUNnF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dq3acFriL2Ls2rg2CVb8Es
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Acw6V85__UxiI6wyfKHhKe
          claim_id: c_MijOgBzqhhgk0HI3Xg87yK
          source_id: s_ahEdZt9ezBzgZU74L7VE9H
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ahEdZt9ezBzgZU74L7VE9H
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 316187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316187&o=json
            external_identifier: CBDB:316187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.955Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bC74FaoMKoE1ese9LFUNnF
        status: active
        display_name: 王敏
        merged_into_person_id: null
    - claim:
        id: c_PagbIhskp8KMPWS6f2VGuB
        subject_person_id: p_BXPg4Uzkhp7cbNvNRe48A2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dq3acFriL2Ls2rg2CVb8Es
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MUuLvQynb0dGePYTQ5M2X9
          claim_id: c_PagbIhskp8KMPWS6f2VGuB
          source_id: s_YodT4wteBUsdB8NbLrfsj4
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YodT4wteBUsdB8NbLrfsj4
            source_type: api_record
            title: 中国历代人物传记资料库：王璇（CBDB 316188）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316188&o=json
            external_identifier: CBDB:316188
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.956Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BXPg4Uzkhp7cbNvNRe48A2
        status: active
        display_name: 王璇
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王三錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三錫 | accepted |
| birth.date | 1524年 | accepted |
| bio.summary | 王三錫（生于1524年），明人物。明清進士進士，籍贯嘉興，入仕進士。（中国历代人物传记资料库 CBDB 204223） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9RFe9RzCfLtq53n3raxU8d | 王綬 | accepted |
| ancestors | p_bC74FaoMKoE1ese9LFUNnF | 王敏 | accepted |
| ancestors | p_BXPg4Uzkhp7cbNvNRe48A2 | 王璇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敏（CBDB 316187）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316187&o=json)
- [中国历代人物传记资料库：王三錫（CBDB 204223）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204223&o=json)
- [中国历代人物传记资料库：王綬（CBDB 316189）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316189&o=json)
- [中国历代人物传记资料库：王璇（CBDB 316188）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316188&o=json)
